const { 
   createFaq, 
   getFAQonCategory, 
   getFAQAnswer
} = require('../controllers/faq')
const { isAuthenticated, authoriseRoles } = require('../middleware/auth')

 const router=require('express').Router()

router.post('/faq/new',isAuthenticated,authoriseRoles("admin"),createFaq)
router.get('/faq/getAll',getFAQonCategory)
router.get('/faq/answer/:id',getFAQAnswer)
 
 
module.exports=router