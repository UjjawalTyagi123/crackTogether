const express=require('express')
const {createUser,getUsers,getUsersByDomain,makeUserLogin}=require('../controller/user')                      
const router = express.Router();

router.post('/',createUser);
router.get('/getall',getUsers);
router.get('/:id',getUsersByDomain);
router.post('/login',makeUserLogin);
module.exports={router}
