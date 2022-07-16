
const express=require('express')
const cookieParser=require('cookie-parser')
const app=express()


const cors=require('cors')


app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(cors())


const userRoute=require('./routes/user')
const categoryRoute=require('./routes/category')
const faqRoute=require('./routes/faq')
const productRoute=require('./routes/product')

app.use('/api/v1',userRoute)
app.use('/api/v1',categoryRoute)
app.use('/api/v1',faqRoute)
app.use('/api/v1',productRoute)


//error middleware
const errorMiddleware=require('./middleware/error')
app.use(errorMiddleware)

module.exports=app