const catchAsyncError = require("../middleware/catchAsyncError");
const FAQ=require("../models/faq")

exports.createFaq=catchAsyncError(async(req,res,next)=>{
    const {question,answer,category}=req.body
 

    const faq=await FAQ.create({
        question,
        answer,
        category
    })

    res.status(201).json({
        faq,
        success:true
    })
})

exports.getFAQonCategory=catchAsyncError(async(req,res,next)=>{
    const {category,isLogin,KYCstatus}=req.query

   console.log(req.query)
    
   const FAQs=[]
    var faq=await FAQ.find({category})
    FAQs.push(faq)
    
    faq=await FAQ.find({category:isLogin})
    FAQs.push(faq)

    faq=await FAQ.find({category:KYCstatus})
     
     
    FAQs.push(faq)


    
    
    res.status(200).json({
        success:true,
        FAQs
    })

})

exports.getFAQAnswer=catchAsyncError(async(req,res,next)=>{

    const {id}=req.params
    const Faq=await FAQ.findById(id) 
    
    res.status(200).json({
        success:true,
        answer:Faq.answer
    })
})