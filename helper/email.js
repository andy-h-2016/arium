const nodemailer = require('nodemailer');
const credentials = require('../config/email_cred')


let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: credentials
});

const overseers = [
  "andy.k.huang@gmail.com",
  "cleverfowl@gmail.com"
]

// satomiampuku2@gmail.com
// li.jasontse@gmail.com
// michaeldeanmdmph@gmail.com

const message = {
  from: credentials.user,
  to: overseers,
  subject: "Test",
  text: "Is this working?",
  html: "<p>HTML is working?</p>"
};

transporter.sendMail(message);
