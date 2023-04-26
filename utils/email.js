const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp-server",
    port: 587,
    secure: false,
    auth: {
        user: "email-username",
        pass: "email-password"
    }
})

module.exports = transporter