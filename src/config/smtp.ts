import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.USER_SMTP,
    pass: process.env.PASSWORD_SMTP,
  },
});
