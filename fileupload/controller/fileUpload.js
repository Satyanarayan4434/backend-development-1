const File = require("../models/File");

exports.localFileUpload = async(req, res) =>{
    try {
        const file = req.files.file;
        console.log(file)
        const path = __dirname + "/files/" + Date.now()+ `.${file.name.split(".")[1]}`;
        console.log(path)
        file.mv(path, (err)=>{
            console.log(err)
        })

        res.status(200).json({
            success:true,
            message:"file uploaded succesfully!"
        });
    } catch (error) {
        console.log(error)
    }
}