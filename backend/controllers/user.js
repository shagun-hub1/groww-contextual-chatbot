const catchAsyncError=require('../middleware/catchAsyncError')
const ErrorHandler=require('../utils/errorHandler')
const User=require('../models/user')
const sendToken = require('../utils/sendToken')
const bcrypt=require('bcryptjs')
 
 

//register User
exports.registerUser=catchAsyncError(async(req,res,next)=>{
    const {name,email,password}=req.body

    const user=await User.create({
        name,
        email,
        password,
    
    })

    sendToken(user,201,res)
})

//login
exports.loginUser=catchAsyncError(async(req,res,next)=>{
    
    
    const {email,password,name}=req.body;

    if(!email || !password || !name)
    return next(new ErrorHandler(400,"Invalid Credentials"))
    
    const user=await User.findOne({email})
    
    
    if(!user)
    return next(new ErrorHandler(400,"Invalid Credentials"))

   

     const isCorrectPassword=await bcrypt.compare(password,user.password)

     if(!isCorrectPassword)
     return next(new ErrorHandler(400,"Invalid Credentials"))

      
    sendToken(user,200,res)
})

//logout User
exports.logoutUser=catchAsyncError(async(req,res,next)=>{

    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true
    })
})

//update user
exports.updateKYC=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params
    console.log("hiya")
    console.log(id)

    const user=await User.findByIdAndUpdate(id,{KYCstatus:true},{new:true})
    console.log(user)

    if(!user)
    return next(new ErrorHandler(404,"User not found"))

    res.status(200).json({
        success:true,
        user
    })
})