import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export function generateVerificationCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export async function sendVerificationEmail(email: string, code: string) {
    const mailOptions = {
        from: 'noreply@savayasyoga.com',
        to: email,
        subject: 'Verify Your Email - SavayasYoga',
        text: `Your verification code is: ${code}`,
    };
    await transporter.sendMail(mailOptions);
}