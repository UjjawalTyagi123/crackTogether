const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-Parser')
const cors=require('cors')
const {router} =require('./router/router')
const {createUser,getUsers}=require('./controller/user')
const app=express()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
app.use('/user',router)
// app.use('/user/',UserRouter)
const PORT=process.env.PORT || 3000
mongoose.connect("mongodb+srv://ujjawal-tyagi:E7xz6uZQbmNZ86qp@cluster0.9poi2ew.mongodb.net/?retryWrites=true&w=majority",{useNewUrlparser:true,useUnifiedtopology:true})
  .then(()=>app.listen(PORT,()=>{
    console.log("server is running on port 3000");
}))
  .catch((error)=>(console.error(error)))