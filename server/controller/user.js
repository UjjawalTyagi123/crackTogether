
const {PostUser}=require('../models/postUser')
const alert=require('alert')

const createUser=async (req,res)=>{

    const {username,email,password,domain,gender,about}=req.body
    const newPostUser=new PostUser({username,email,password,domain,gender,about})
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
      const users=await PostUser.find()
      const domain_users=users.filter(user=>user.domain===id)
      res.json(domain_users)
    } catch (error) {
      res.json({message:error.message})
    }
  }
module.exports={createUser,getUsers,getUsersByDomain}