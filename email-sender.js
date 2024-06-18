// email-sender.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'omarchallouf8@gmail.com', 
        pass: ''  
    }
});

const mailOptions = {
    from: 'omarchallouf8@gmail.com',
    to: 'ali123@gmailyour.com',     
    subject: 'Test Email',
    text: 'Hello, this is a test email from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Email sent: ' + info.response);
});
