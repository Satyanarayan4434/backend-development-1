const coudinary = require("cloudinary").v2;

exports.coudinaryConnect = () => {
  try {
    coudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      secret: process.env.SECRET,
    });
  } catch (error) {
    console.log(error);
  }
};
