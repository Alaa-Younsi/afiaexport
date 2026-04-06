import nodemailer from 'nodemailer';

// Allowed origins — covers both www and non-www, and Vercel preview URLs
const ALLOWED_ORIGINS = [
  'https://afiaexport.com',
  'https://www.afiaexport.com',
];

function isAllowedOrigin(origin) {
  if (!origin) return true; // server-to-server or same-origin requests have no origin header
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (origin.endsWith('.vercel.app')) return true; // allow Vercel preview deployments
  return false;
}

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // Set CORS headers on every response
  const allowedOrigin = isAllowedOrigin(origin) ? (origin ?? '*') : 'https://afiaexport.com';
  res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  // Block non-allowed origins (only if origin header is present and not allowed)
  if (origin && !isAllowedOrigin(origin)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Honeypot — bots fill this, humans don't
  if (req.body?.honeypot) {
    return res.status(200).json({ success: true });
  }

  const rawName    = String(req.body?.name    ?? '').trim();
  const rawEmail   = String(req.body?.email   ?? '').trim();
  const rawPhone   = String(req.body?.phone   ?? '').trim();
  const rawMessage = String(req.body?.message ?? '').trim();

  // Validation
  if (!rawName || !rawEmail || !rawMessage) {
    return res.status(400).json({ error: 'Name, email and message are required.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
    return res.status(400).json({ error: 'Invalid email address.' });
  }
  if (
    rawName.length > 100 ||
    rawEmail.length > 254 ||
    rawPhone.length > 30 ||
    rawMessage.length > 2000
  ) {
    return res.status(400).json({ error: 'Input exceeds maximum length.' });
  }

  const esc = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  // Log env vars presence (not values) to help debug on Vercel
  console.log('[Contact API] ENV check:', {
    SMTP_HOST: !!process.env.SMTP_HOST,
    SMTP_PORT: !!process.env.SMTP_PORT,
    SMTP_SECURE: !!process.env.SMTP_SECURE,
    SMTP_USER: !!process.env.SMTP_USER,
    SMTP_PASS: !!process.env.SMTP_PASS,
  });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false, // needed for some hosting providers including Hostinger
    },
  });

  try {
    const info = await transporter.sendMail({
      from: `"AFIA EXPORT Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // send to the same mailbox — contact@afiaexport.com
      replyTo: rawEmail,
      subject: `Inquiry from ${rawName} — AFIA EXPORT Website`,
      text: [
        `Name:    ${rawName}`,
        `Email:   ${rawEmail}`,
        `Phone:   ${rawPhone || 'N/A'}`,
        '',
        'Message:',
        rawMessage,
      ].join('\n'),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
          <div style="background:#D94E2A;padding:20px 28px">
            <h2 style="color:#fff;margin:0;font-size:20px">New Inquiry — AFIA EXPORT</h2>
          </div>
          <div style="padding:28px">
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:6px 0;color:#6b7280;width:90px">Name</td><td style="padding:6px 0;font-weight:600">${esc(rawName)}</td></tr>
              <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0"><a href="mailto:${esc(rawEmail)}" style="color:#D94E2A">${esc(rawEmail)}</a></td></tr>
              <tr><td style="padding:6px 0;color:#6b7280">Phone</td><td style="padding:6px 0">${esc(rawPhone || 'N/A')}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0">
            <p style="color:#6b7280;margin:0 0 8px;font-size:14px">Message</p>
            <p style="white-space:pre-wrap;font-size:15px;line-height:1.6;margin:0">${esc(rawMessage)}</p>
          </div>
        </div>
      `,
    });
    console.log('[Contact API] Email sent:', info.messageId);
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Contact API] Send error:', err.message, err.code);
    return res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '16kb',
    },
  },
};
