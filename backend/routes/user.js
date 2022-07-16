const { 
    registerUser, 
    loginUser,
    logoutUser,
    updateKYC,
    
} = require('../controllers/user')
const { isAuthenticated } = require('../middleware/auth')

 const router=require('express').Router()

router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/user/logout',logoutUser)
router.put('/user/KYC/:id',isAuthenticated,updateKYC)
 
module.exports=router