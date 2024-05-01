const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,"contact_sendform.js")))

// Define a route to handle form submissions
app.post('/send-email', (req, res) => {
  const { email, phone, message } = req.body;

  // Set up Nodemailer transporter with your email credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., Gmail, Yahoo, etc.
    auth: {
      user: 'quynhnguyen.spjain@gmail.com',
      pass: '060302tq',
    },
  });

  // Email content
  const mailOptions = {
    from: 'quynhnguyen.spjain@gmail.com',
    to: 'quynhnguyen.spjain@gmail.com', // Your email where you want to receive messages
    subject: 'New message from contact form',
    text: `
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error: Unable to send email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});