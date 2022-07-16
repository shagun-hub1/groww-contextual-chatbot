const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
 

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        minlength:[8,"Passowrd must be greater than 8 characters"],
        required:true
    },
    KYCstatus:{
       type:Boolean,
       default:false
    },
    role:{
        type:String,
        default:"user"
    }

},{timestamps:true})


userSchema.pre("save",async function(next){
    
    if(!this.isModified("password"))
    next()
    
     
    
    this.password=await bcrypt.hash(this.password,10)
})

module.exports=mongoose.model('user',userSchema)
 