const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const transporter = require('../configs/mail');
const { sendMail, adminMail } = require('../utility');


router.get('/', async (req, res) => {
  const page = +req.query.page || 1;
  // console.log('page:', page)
  const size = +req.query.limit || 10;
  // console.log('size:', size)
  const offset = (page - 1) * size;
  // console.log('offset:', offset)
  const user = await User.find().skip(offset).limit(size).lean().exec();

  const totalPages = Math.ceil(
      await User.find().countDocuments().lean().exec()
      )/size;
    //   console.log('totalPages:', totalPages)
  return res.status(200).send({users: user, totalPages: totalPages});
});

router.post('/',async(req, res)=>{
    try {
        const user=await User.create(req.body);
        sendMail({
          from: '"Admin" <admin@amazon.com>', // sender address
          to: user.email, // list of receivers
          subject: `Welcome to ABC system ${user.firstName} ${user.lastName}`, // Subject line
          text: `Hi${user.firstName}`, // plain text body
          html: `<b>Hi,  ${user.firstName}</b>`, // html body
        });
        
        adminMail({
          from: 'mainAdmin@gmail.com', // sender address
          to: 'admin1@m , admin2@m , admin3@m , admin4@m , admin5@m', // list of receivers
          subject: `${user.firstName} ${user.lastName} has registered with us`, // Subject line
          text: `Please welcome  ${user.firstName} ${user.lastName}`, // plain text body
          html: `<b>Please welcome  ${user.firstName} ${user.lastName}</b>`, // html body
        });
        return res.status(201).send({ message: 'Registered successfully' });
    }catch(err) {
        return res.status(500).send({message:err.message});
    }
})

module.exports = router;
