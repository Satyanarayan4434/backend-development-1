const bcrypt = require("bcrypt");
const User = require("../model/User");
let jwt = require("jsonwebtoken");
require("dotenv").config()

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
                message:"Error in hasing",
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
        const {email, password} = req.body;
        //validation check
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"Please fill all the details correctly!!!"
            })
        }

        //user check
        let user = await User.findOne({email})
        if(!user){
            return res.status(401).json({
                success:false,
                message:"user not found",
            })
        }

        const payload = {
            email: user.email,
            id: user._id,
            role: user.role
        }

        //verify password and generate JWT token
        if(await bcrypt.compare(password, user.password)){
            let token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn:"2h"})

            user = user.toObject();
            user.token = token;
            user.password = undefined;
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }
            res.cookie("token", token, options).status(200).json({
                success:true,
                token,
                user,
                message:"User loggedIn Successfully!"
            })
        }
        else{
            return res.status(400).json({
                success:false,
                message:"Wrong Password!"
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Login Faliure"
        })
    }
}