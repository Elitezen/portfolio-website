import express from 'express';
import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';
import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { VercelRequest, VercelResponse } from '@vercel/node';

config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.APP_EMAIL,
    pass: process.env.APP_PASSWORD,
  },
});

const app = express();

app.use(cors());
app.use(express.json());

app.post('/send-email', async (request:express.Request, response:any) => {
  const { name, email, subject, message } = request.body;
  const { 'g-recaptcha-response': token } = request.body;

  const mailOptions: MailOptions = {
    from: email,
    to: [`${process.env.APP_EMAIL}`, 'dev.elitezen@gmail.com'],
    subject: `From ${name} | ${subject?.length ? subject : 'No Subject'}`,
    text: `${message}\n\nProvided email: ${email}`,
  };

  try {
    await verifyCaptcha(token);
    await transporter.sendMail(mailOptions);
    return response.status(200).send('Email sent successfully');
  } catch (err) {
    console.error(err);
    return response.status(500).send('Failed to send email');
  }
});

async function verifyCaptcha(token: string) {
  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: process.env['RECAPTCHA_SECRET_KEY']!,
        response: token,
      }),
    });

    const resJSON = (await res.json()) as { success: boolean };
    if (!resJSON.success) {
      throw 'Failed to verify captcha';
    }
  } catch (err) {
    throw err;
  }
}

// Wrap the express app to a Vercel serverless function
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
