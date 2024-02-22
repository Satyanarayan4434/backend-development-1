//express import and creating app
const express = require("express");
const app = express();

//configure dotenv for env file
require("dotenv").config();

//define listing port
const PORT = process.env.PORT || 3000;


//using json body parser middleware
app.use(express.json());

//importing express-fileupload and connect
const fileUpload = require("express-fileupload");
app.use(fileUpload());


//importing database and connecting
require("./config/database").connect();
require("./config/cloudinary").coudinaryConnect();

//importing route file and mounting
const uploadFile = require("./routes/FileUpload");
app.use("/api/v1", uploadFile);

//activating server
app.listen(PORT, ()=>{
    console.log(`App is listing succefully over port number ${PORT}`)
})

app.get('/', (req, res)=>{
    res.send("This is Home page")
})


