import transporter from "../config/mail.js"

async function sendMail({ to, subject, html, text }) {
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
    text
  }

  const info = await transporter.sendMail(mailOptions)
  return info
}

export { sendMail }