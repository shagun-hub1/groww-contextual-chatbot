const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    logo:{
        type:String,
        required:true
    },
    MarketCap:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    PL:{
        type:Number,
        required:true
    },
    per:{
        type:Number,
        required:true
    },
    data:{
        type:Array
    }
})

module.exports=mongoose.model('Product',productSchema)