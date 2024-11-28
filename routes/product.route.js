const { Router } = require("express");
const { getProduct, getProductById, createProduct, deleteProduct, updateProduct } = require("../controllers/product.controller");
const upload = require("../utils/imageupload");

const productRoute =Router()

productRoute.get('/',getProduct)
productRoute.get('/:productId',getProductById)
productRoute.post('/',upload.single("img"),createProduct)
productRoute.delete('/:productId',deleteProduct)
productRoute.patch('/:productId',updateProduct)


module.exports =productRoute