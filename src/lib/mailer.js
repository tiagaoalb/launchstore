const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e0d2bd5eaf76a3",
    pass: "a02b61817132ce"
  }
});
