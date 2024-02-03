const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

//database connection
require("./config/database").connect();

//route import and mounting
const user = require("./routes/user");
app.use("/api/v1", user);

//server activate
app.listen(PORT , ()=>{
    console.log(`App is listening at ${PORT}`)
});

app.get("/", (req, res)=>{
    res.send(`<h1>This is my homePage baby</h1>`);
})