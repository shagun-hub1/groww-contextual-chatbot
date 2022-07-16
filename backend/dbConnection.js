const mongoose=require('mongoose')

const dbURL=process.env.URL

const connection=mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then((data)=>{
    console.log(`Mongodb connect with server ${data.connection.host}`)
})

module.exports=connection