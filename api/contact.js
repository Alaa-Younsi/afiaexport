import nodemailer from 'nodemailer';

const ALLOWED_ORIGIN = 'https://afiaexport.com';

export default async function handler(req, res) {
  // CORS — only allow requests from the real domain
  const origin = req.headers.origin;
  if (origin && origin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Honeypot check — bots fill hidden fields, humans don't
  if (req.body?.honeypot) {
    return res.status(200).json({ success: true }); // silently discard
  }

  const rawName    = String(req.body?.name    ?? '').trim();
  const rawEmail   = String(req.body?.email   ?? '').trim();
  const rawPhone   = String(req.body?.phone   ?? '').trim();
  const rawMessage = String(req.body?.message ?? '').trim();

  // Server-side validation
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

  // HTML sanitiser — prevent injection in the email body
  const esc = (str) =>
    str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"AFIA EXPORT Website" <${process.env.SMTP_USER}>`,
      to: 'contact@afiaexport.com',
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

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('[Contact API] Email send error:', err.message);
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
