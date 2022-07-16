const { createCategory, getAllCategories } = require('../controllers/category')
const { isAuthenticated, authoriseRoles } = require('../middleware/auth')

const router=require('express').Router()

router.post('/category/new',isAuthenticated,authoriseRoles("admin"),createCategory)
router.get('/categories',isAuthenticated,authoriseRoles("admin"),getAllCategories)

module.exports=router