require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Your Gmail address
    pass: process.env.EMAIL_PASS   // Your Gmail password or App password
  }
});


const mailOptions = {
  from: process.env.EMAIL_USER,
  to: 'ummadivikram@gmail.com',
  subject: 'Test Email',
  text: '${name}'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
