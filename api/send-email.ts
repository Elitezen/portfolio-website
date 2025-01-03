import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { VercelRequest, VercelResponse } from '@vercel/node';

config();

// Initialize the nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

// CAPTCHA verification function
async function verifyCaptcha(token: string) {
  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET_KEY!,
        response: token,
      }),
    });

    const resJSON = (await response.json()) as { success: boolean };
    if (!resJSON.success) {
      throw new Error('Failed to verify CAPTCHA');
    }
  } catch (err) {
    throw new Error('CAPTCHA verification error: ' + err);
  }
}

// Export the handler as a Vercel serverless function
export default async (req: VercelRequest, res: VercelResponse) => {
  const { name, email, subject, message, 'g-recaptcha-response': token } = req.body;

  const mailOptions: MailOptions = {
    from: email,
    to: [process.env.APP_EMAIL!, 'dev.elitezen@gmail.com'],
    subject: `From ${name} | ${subject?.length ? subject : 'No Subject'}`,
    text: `${message}\n\nProvided email: ${email}`,
  };

  try {
    await verifyCaptcha(token);
    await transporter.sendMail(mailOptions);
    return res.status(200).send('Email sent successfully');
  } catch (err) {
    console.error(err);
    return res.status(500).send('Failed to send email');
  }
};
