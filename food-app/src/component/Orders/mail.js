
const nodemailer = require('nodemailer');

const sendEmail = async (senderEmail, recipientEmail, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'  
      }
    });
    const mailOptions = {
      from: senderEmail,
      to: recipientEmail,
      subject: 'Delivery Confirmation',
      text: message
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
