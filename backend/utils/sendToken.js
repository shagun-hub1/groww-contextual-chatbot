const jwt=require('jsonwebtoken')

const sendToken=async(user,statusCode,res)=>{

    const token=  await jwt.sign({id:user._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })

    const options={
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly:true
    }

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        token,
        user
    })
}

module.exports=sendToken