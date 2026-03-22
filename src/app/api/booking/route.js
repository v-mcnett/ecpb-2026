// app/api/booking/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

const resend = new Resend(process.env.RESEND_API_KEY);

// Initialize Google Sheets
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, eventDate, eventType, package: pkg, venue, notes, message } = formData;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. Save to Google Sheets
    const timestamp = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:K', // Adjust based on your sheet structure
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          timestamp,
          name,
          email,
          phone,
          eventDate,
          eventType,
          pkg || 'Not specified',
          venue || 'Not specified',
          notes || 'None',
          message || 'None',
          'Pending' // Status column
        ]],
      },
    });

    // 2. Send email to business
    await resend.emails.send({
      from: 'admin@emeraldcityphotobooth.com', // Replace with your verified domain
      to: 'admin@emeraldcityphotobooth.com', // Replace with your business email,
      bcc: 'vmcnett@gmail.com',
      subject: `New Photo Booth Booking - ${eventType}`,
      html: `
        <h2>New Photo Booth Booking Request</h2>
        <p><strong>Event Date:</strong> ${eventDate}</p>
        <hr />
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <hr />
        <h3>Event Details</h3>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Package:</strong> ${pkg || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${venue || 'Not specified'}</p>
        <p><strong>Additional Notes:</strong></p>
        <p>${notes || 'None'}</p>
        <p><strong>Message:</strong></p>
        <p>${message || 'None'}</p>
        <hr />
        <p><em>Submitted at ${new Date(timestamp).toLocaleString()}</em></p>
      `,
    });

    // 3. Send confirmation email to customer
    await resend.emails.send({
      from: 'admin@emeraldcityphotobooth.com', // Replace with your verified domain
      to: email,
      subject: 'Photo Booth Booking Request Received',
      html: `
        <h2>Thank You for Your Booking Request!</h2>
        <p>Hi ${name},</p>
        <p>We've received your photo booth booking request for <strong>${eventDate}</strong>.</p>
        <p>Our team will review your request and get back to you within 24 hours to confirm availability and finalize the details.</p>
        <hr />
        <h3>Your Booking Details</h3>
        <p><strong>Event Type:</strong> ${eventType}</p>
        <p><strong>Package:</strong> ${pkg || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${venue || 'Not specified'}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${notes ? `<p><strong>Notes:</strong> ${notes}</p>` : ''}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
        <hr />
        <p>If you have any questions in the meantime, feel free to reply to this email or call us.</p>
        <p>Best regards,<br/>Your Photo Booth Team</p>
      `,
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Booking request submitted successfully' 
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}