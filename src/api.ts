import express from "express";
import { config } from "dotenv"
import nodemailer from "nodemailer";
import cors from "cors";
import { MailOptions } from "nodemailer/lib/sendmail-transport";

config();

const server = express();
const port = 3_000;

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD
    }
})

server.use(cors());
server.use(express.json());

server.post("/send-email", async (request, response) => {
    const { name, email, subject, message } = request.body;

    const mailOptions:MailOptions = {
        from: email,
        to: [`${process.env.APP_EMAIL}`, 'dev.elitezen@gmail.com'],
        subject: `From ${name} | ${subject?.length ? subject : "No Subject"}`,
        text: `${message}\n\nProvided email: ${email}`
    }

    try {
        await transporter.sendMail(mailOptions);
        return void response.sendStatus(200);
    } catch (err) {
        console.error(err);
        return void response.sendStatus(500);
    }
});

server.listen(port, () => console.log(`Server is listening on http://localhost:${port}`));