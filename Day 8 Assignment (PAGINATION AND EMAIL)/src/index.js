const express = require('express');

const start = require('./server');
// 'use strict';

// async..await is not allowed in global scope, must use a wrapper
// async function main() {
  // send mail with defined transport object
 

  //   console.log('Message sent: %s', info.messageId);
  //   // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //   // Preview only available when sending through an Ethereal account
  //   console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  //   // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
// }

// main().catch(console.error);

start();
