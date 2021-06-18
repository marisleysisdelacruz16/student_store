const express = require("express")
const Store = require("../models/store")
const { NotFoundError } = require("../utils/errors")
const router = express.Router()

// show all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Store.listProducts()
    res.status(200).json({ products })
  } catch (err) {
    next(err)
  }
})

// fetch single product
router.get("/:productId", async (req, res, next) => {
  try {
    const productId = req.params.productId
    const product = await Store.fetchProductById(productId)
    if (!product) {
      throw new NotFoundError("Product not found")
    }
    res.status(200).json({ product })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
    try {
      const cart = req.body.cart
      const userInfo = req.body.userInfo
      const purchase = await Store.purchaseProducts(cart, userInfo)
      res.status(200).json({ purchase, cart })
    } catch (err) {
      next(err)
    }
  })


module.exports = router