const mongoose = require("mongoose")

require("dotenv").config();

exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("DB connection Successfull"))
    .catch((error)=>{
        console.log("DB connection Issue");
        console.error(error);
        process.exit(1)
    })

}

