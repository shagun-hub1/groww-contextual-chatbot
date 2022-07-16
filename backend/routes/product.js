const { 
    createProduct, 
    getAllProducts, 
    getProduct 
} = require('../controllers/product')
const { isAuthenticated, authoriseRoles } = require('../middleware/auth')

const router=require('express').Router()

router.post('/product/create',isAuthenticated,authoriseRoles("admin"),createProduct)
router.get('/products',getAllProducts)
router.get('/product/:id',getProduct)

module.exports=router