const express=require('express')
const {createUser,getUsers,getUsersByDomain}=require('../controller/user')                      
const router = express.Router();

router.post('/',createUser);
router.get('/getall',getUsers);
router.get('/:id',getUsersByDomain);
module.exports={router}
