import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"

export const signup = async(req, res, next) => {    
    const {username, email, password} = req.body
    if(!username || !email || !password || username === "" || email === "" || password === ""){
        // res.status(400).json({message: "All fields are required"})
        next(errorHandler(400, 'All fields are required'))
        return
    }
    const hashedPassword = bcryptjs.hashSync(password, 10)
    try {
        const user = await User.create({
            username,
            email,
            password: hashedPassword
        })
        res.status(201).json({user})
    } catch (error) {
        // res.status(400).json({message: error.message})
        next(error)
    }
}