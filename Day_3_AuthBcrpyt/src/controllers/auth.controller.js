import User from "../model/user.model.js";
import bcrypt from "bcrypt";


export const register = async (req, res) => {
    try{
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({message: "Please provide all required fields"});
        }

        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: "User already exists with this email"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });
        await newUser.save();

        res.status(201).json({message: "User registered successfully"});
    }catch(error){
        console.error("Error in registration:", error.message);
        res.status(500).json({message: "Server error during registration"});
    }
}

export const login = async (req, res) => {
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({message: "Please provide all required fields"});
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message: "Invalid email or password"});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid email or password"});
        }

        res.status(200).json({message: "Login successful"});
    }catch(error){
        console.error("Error in login:", error.message);
        res.status(500).json({message: "Server error during login"});
    }
    }