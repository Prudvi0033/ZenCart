import express from 'express'
import { createProducts, getProducts } from '../controllers/product.controller.js'

const router = express.Router()

router.get("/",getProducts)
router.post("/",createProducts)

export default router