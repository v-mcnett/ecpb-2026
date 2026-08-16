// app/api/booking/route.js
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'admin@emeraldcityphotobooth.com';
const resendToEmail = process.env.RESEND_TO_EMAIL || 'mcnettc@gmail.com';
const resendBccEmail = process.env.RESEND_BCC_EMAIL || 'vmcnett@gmail.com';
const resend = resendApiKey ? new Resend(resendApiKey) : null;

if (!resendApiKey) {
  console.error('RESEND_API_KEY is not configured. Email sending will not work.');
}


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


    console.log('Booking request received:', {
      name: safeName,
      email: safeEmail,
      phone: safePhone,
      eventDate: safeEventDate,
      eventType: safeEventType,
      package: safePkg,
      venue: safeVenue,
      notes: safeNotes,
      message: safeMessage,
      timestamp,
    });

    if (!resend) {
      console.error('Resend client did not initialize. Check RESEND_API_KEY in environment.');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    let emailSentToBusiness = false;
    let emailSentToCustomer = false;
    let emailErrors = [];

    try {
      console.log('Sending booking email to business', {
        from: resendFromEmail,
        to: resendToEmail,
        bcc: resendBccEmail,
      });
      const result = await resend.emails.send({
        from: resendFromEmail,
        to: resendToEmail,
        bcc: resendBccEmail,
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
      console.log('Booking email sent to business:', result);
      emailSentToBusiness = true;
    } catch (error) {
     // console.log('Resend business email failed:', error);
      emailErrors.push({ to: 'business', error });
      console.error('Resend business email failed:', error);
    }

    try {
      const customerEmailResult = await resend.emails.send({
        from: 'admin@emeraldcityphotobooth.com',
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

      console.log('Booking confirmation email sent to customer:', customerEmailResult);
      emailSentToCustomer = true;
    } catch (error) {
     // console.log('Resend customer email failed:', error);
      emailErrors.push({ to: 'customer', error });
      console.error('Resend customer email failed:', error);
    }

    console.log('Email send results:', { emailSentToBusiness, emailSentToCustomer, errors: emailErrors.length });

    const responsePayload = {
      success: true,
      message: 'Booking request submitted successfully',
      googleSheetsSaved: sheetsSaved,
      emailSentToBusiness,
      emailSentToCustomer,
    };

    if (emailErrors.length > 0) {
      responsePayload.emailErrors = emailErrors.map((entry) => ({
        to: entry.to,
        message: entry.error?.message || 'Unknown error',
      }));
    }

    if (emailErrors.length > 0) {
      return NextResponse.json(responsePayload, { status: 500 });
    }

    return NextResponse.json(responsePayload);

  } catch (error) {
    console.error('Booking error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking request' },
      { status: 500 }
    );
  }
}