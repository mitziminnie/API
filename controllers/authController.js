// import model
import User from "../Models/userModel.js";
import bcrypt from "bcrypt"



async function register(req,res) {
    try {
        // what data we'll be using

        const{name,email,password}=req.body

        // check if a user already exists

        const existinguser= await User.findOne({email})

        if(existinguser)
        {
            res.status(404).json({message:"User Already exist"})
        }

        // hash password before saving it
        const hashedPassword= await bcrypt.hash(password,10)

        const newUser=await User.create({
            name,email,password:hashedPassword,profilepicture:null
        })
        // return response
        res.status(201).json(newUser)


    } catch (error) {
        res.status(500).json({error:error.message})
    }
    
}


async function login(req,res) {
    try {
        const{email,password}=req.body
        // Check if user exist 
        const existinguser= await User.findOne({email})

        if(!existinguser){
            res.status(404).json({message:"Invalid Credentials"})
        }

        // check if password ,matches
        const comparePaswords=await bcrypt.compare(password,existinguser.password)

        if(!comparePaswords){
              res.status(404).json({message:"Invalid Credentials"})
        }

        res.status(200).json(existinguser)




    } catch (error) {
          res.status(500).json({error:error.message})
    }
    
}

export{register,login}

