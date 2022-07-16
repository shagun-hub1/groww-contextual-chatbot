const catchAsyncError = require("../middleware/catchAsyncError");
const Product=require('../models/product')

exports.createProduct=catchAsyncError(async(req,res,next)=>{

    const product=await Product.create(req.body)

    res.status(201).json({
        success:true,
        product
    })
})

exports.getProduct=catchAsyncError(async(req,res,next)=>{

    const product=await Product.findById(req.params.id)

    res.status(200).json({
        success:true,
        product
    })
})

exports.getAllProducts=catchAsyncError(async(req,res,next)=>{

    const products=await Product.find()

    res.status(200).json({
        success:true,
        products
    })
})