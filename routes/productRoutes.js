const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)
router.get('/:id', ProductController.showProductById)
router.post('/delete', ProductController.deleteProductByIdPost)
router.get('/edit/:id', ProductController.updateProduct)
router.post('/edit', ProductController.updateProductSave)
router.get('/', ProductController.showProducts)

module.exports = router