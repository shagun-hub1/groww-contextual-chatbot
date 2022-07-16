const app=require('./app')
 

const dotenv=require('dotenv')
 

dotenv.config()

require('./dbConnection')

const port=process.env.PORT

 
app.listen(port,()=>{
    console.log(`App is listening at http://localhost/:${port}`)
})