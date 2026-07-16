// app/api/booking/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

const resend = new Resend(process.env.RESEND_API_KEY);

let sheetsClient = null;

function parseCredentials(rawValue) {
  if (!rawValue) {
    return null;
  }

  const value = rawValue.trim();
  const normalized = value.startsWith("'") && value.endsWith("'") ? value.slice(1, -1) : value;

  return JSON.parse(normalized);
}

async function getSheetsClient() {
  if (sheetsClient) {
    return sheetsClient;
  }

  const spreadsheetId = process.env.GOOGLE_SHEET_ID || process.env.GOOGLE_SHEETS_ID;
  const credentials = parseCredentials(
    process.env.GOOGLE_SHEET_CREDENTIALS || process.env.GOOGLE_SHEETS_CREDENTIALS
  );

  if (!spreadsheetId || !credentials) {
    return null;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsClient = google.sheets({ version: 'v4', auth });
    return sheetsClient;
  } catch (error) {
    console.error('Google Sheets initialization failed:', error);
    return null;
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, phone, eventDate, eventType, package: pkg, venue, notes, message } = formData ?? {};

    const safeName = typeof name === 'string' ? name.trim() : '';
    const safeEmail = typeof email === 'string' ? email.trim() : '';
    const safePhone = typeof phone === 'string' ? phone.trim() : '';
    const safeEventDate = typeof eventDate === 'string' ? eventDate.trim() : '';
    const safeEventType = typeof eventType === 'string' ? eventType.trim() : '';
    const safePkg = typeof pkg === 'string' ? pkg.trim() : '';
    const safeVenue = typeof venue === 'string' ? venue.trim() : '';
    const safeNotes = typeof notes === 'string' ? notes.trim() : '';
    const safeMessage = typeof message === 'string' ? message.trim() : '';

    if (!safeName || !safeEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const spreadsheetId = process.env.GOOGLE_SHEET_ID || process.env.GOOGLE_SHEETS_ID;
    let sheetsSaved = false;
    let sheetsError = null;

    const sheets = await getSheetsClient();
    if (sheets && spreadsheetId) {
      try {
        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: 'Sheet1!A:K',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[
              timestamp,
              safeName,
              safeEmail,
              safePhone || 'Not provided',
              safeEventDate || 'Not provided',
              safeEventType || 'Not provided',
              safePkg || 'Not specified',
              safeVenue || 'Not specified',
              safeNotes || 'None',
              safeMessage || 'None',
              'Pending',
            ]],
          },
        });
        sheetsSaved = true;
      } catch (error) {
        sheetsError = error;
        console.error('Google Sheets append failed:', error);
      }
    }

    // 2. Send email to business
    await resend.emails.send({
      from: 'admin@emeraldcityphotobooth.com', // Replace with your verified domain
      to: 'admin@emeraldcityphotobooth.com', // Replace with your business email,
      bcc: 'vmcnett@gmail.com',
      subject: `New Photo Booth Booking - ${safeEventType || 'General Inquiry'}`,
      html: `
        <h2>New Photo Booth Booking Request</h2>
        <p><strong>Event Date:</strong> ${safeEventDate || 'Not provided'}</p>
        <hr />
        <h3>Customer Details</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
        <hr />
        <h3>Event Details</h3>
        <p><strong>Event Type:</strong> ${safeEventType || 'Not provided'}</p>
        <p><strong>Package:</strong> ${safePkg || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${safeVenue || 'Not specified'}</p>
        <p><strong>Additional Notes:</strong></p>
        <p>${safeNotes || 'None'}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage || 'None'}</p>
        <hr />
        <p><em>Submitted at ${new Date(timestamp).toLocaleString()}</em></p>
      `,
    });

    // 3. Send confirmation email to customer
    await resend.emails.send({
      from: 'admin@emeraldcityphotobooth.com', // Replace with your verified domain
      to: safeEmail,
      subject: 'Photo Booth Booking Request Received',
      html: `
        <h2>Thank You for Your Booking Request!</h2>
        <p>Hi ${safeName},</p>
        <p>We've received your photo booth booking request for <strong>${safeEventDate || 'your requested date'}</strong>.</p>
        <p>Our team will review your request and get back to you within 24 hours to confirm availability and finalize the details.</p>
        <hr />
        <h3>Your Booking Details</h3>
        <p><strong>Event Type:</strong> ${safeEventType || 'Not provided'}</p>
        <p><strong>Package:</strong> ${safePkg || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${safeVenue || 'Not specified'}</p>
        <p><strong>Phone:</strong> ${safePhone || 'Not provided'}</p>
        ${safeNotes ? `<p><strong>Notes:</strong> ${safeNotes}</p>` : ''}
        ${safeMessage ? `<p><strong>Message:</strong> ${safeMessage}</p>` : ''}
        <hr />
        <p>If you have any questions in the meantime, feel free to reply to this email or call us.</p>
        <p>Best regards,<br/>Your Photo Booth Team</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Booking request submitted successfully',
      googleSheetsSaved: sheetsSaved,
      ...(sheetsError ? { warning: 'Booking email was sent, but Google Sheets could not be updated.' } : {}),
    });

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}