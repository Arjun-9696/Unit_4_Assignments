const transporter = require('./configs/mail');
// console.log(transporter);

const sendMail = async ({ from, to, subject, text, html }) => {
  await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });
};

const adminMail = async ({ from, to, subject, text, html }) => {
  await transporter.sendMail({
    from, // sender address
    to, // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  });
};

module.exports = { sendMail, adminMail };
