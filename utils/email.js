const nodemailer = require("nodemailer");


  const transporter = nodemailer.createTransport({
   service: 'gmail',
   host: 'smtp.gmail.com',
   port: 465,
   secure: true,
   auth: {
    user: 'canorecords00@gmail.com',
    pass: 'zmumggntyccbwnhz',
   },
  });

module.exports = transporter