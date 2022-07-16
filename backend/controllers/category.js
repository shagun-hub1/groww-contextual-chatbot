const catchAsyncError = require("../middleware/catchAsyncError");
const Category=require('../models/category');
 

exports.createCategory=catchAsyncError(async(req,res,next)=>{
    
    
     const {name}=req.body

     const category=await Category.create({
        name
     })

     console.log(req.body)
    
    res.status(201).json({
        success:true,
        category
    })
})

exports.getAllCategories=catchAsyncError(async(req,res,next)=>{

    const categories=await Category.find()

    res.status(200).json({
        categories,
        success:true
    })
})