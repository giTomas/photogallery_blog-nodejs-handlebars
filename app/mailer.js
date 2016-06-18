var nodemailer      = require('nodemailer');
var smtpTransporter = require('nodemailer-smtp-transport');

exports.handleSendMail = (req, res) => {
  var transporter = nodemailer.createTransport({
    service: process.env.NODEMAILER_SERVICE,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS

    }
  });

  var mailOptions = {
    to: "tk.develtest@gmail.com",
    subject: req.body.subject,
    // text: req.body.message + req.body.last__name,
    html: '<p style="width: 100%">  správa: ' + req.body.message + '</p>'
          + '<p style="width: 100%"> od: ' + req.body.name + '</p>'
          + '<p style="width: 100%"> mail: ' + req.body.email + '</p>'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if(error){
      console.log(error);
    } else {
      res.render('success', { title: "success" });
    }
  });
}
