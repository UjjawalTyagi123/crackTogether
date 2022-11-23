
const {PostUser}=require('../models/postUser')
const alert=require('alert')

const createUser=async (req,res)=>{

    const {username,email,password,facebook,instagram,domain,gender,about,file}=req.body
    const newPostUser=new PostUser({username,email,password,facebook,instagram,domain,gender,about,file})
    user=await PostUser.findOne({email})
    newPostUser.save()
    try {
      res.json(newPostUser)
    } catch (error) {
      req.json({message:error.message})
    }
    // if(!user){      
    //    alert("User already exists!")
    // } 
    //   else{
    //     newPostUser.save()
   
      
    //   }
    }

  const getUsers=async (req,res)=>{
    const users=await PostUser.find();
    try {
      res.status(201).json(users)
    } catch (error) {
      res.json({message:error.message})
    }
  }  
   
  const getUsersByDomain=async(req,res)=>{
    const id=req.params.id
    try {
      const user=await PostUser.findById(id)
      res.json(user)
    } catch (error) {
      res.json({message:error.message})
    }
  }

 const makeUserLogin=async(req,res)=>{
  let setRes;
  const {email,password}=req.body;
  const users=await PostUser.findOne({email});
  if(!users) res.json(0)
 else if(email===users.email && password===users.password) res.json(1)
  else if(email===users.email && password !==users.password)res.json(2)
  
  // const user=allUser.filter(user=>user.email===email)
 }
module.exports={createUser,getUsers,getUsersByDomain,makeUserLogin}