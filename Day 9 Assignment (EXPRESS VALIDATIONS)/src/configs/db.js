const mongoose = require('mongoose');

const connect=()=>{
    return mongoose.connect(
      "mongodb+srv://Arjun:Arjun009@cluster0.4dwre.mongodb.net/validationAssignment?retryWrites=true&w=majority"
    );
};
module.exports=connect;