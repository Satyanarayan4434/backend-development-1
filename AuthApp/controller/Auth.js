const bcrypt = require("bcrypt");
const User = require("../model/User");

exports.signup = async(req, res) =>{
    try {
        const {name, email, password, role} = req.body;

        //find exsisting user
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"User already exist"
            })
        }

        //hasing the password
        let hashPassword;
        try {
           hashPassword = await bcrypt.hash(password, 10); 
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:"Error in parsing",
            })
        }

        //create entry in database
        const user = await User.create({
            name, email, password:hashPassword, role
        })
        return res.status(200).json({
            success:true,
            message:"User created succefully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Try after some time!!!"
        })
    }
}

exports.login = async(req, res)=>{
    try {
        
    } catch (error) {
        
    }
}