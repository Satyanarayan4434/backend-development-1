const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(console.log("DB connection succfull"))
    .catch((err) => {
      console.log("DB connection Issue");
      console.error(err);
      process.exit(1)
    });
};
