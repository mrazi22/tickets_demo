const express = require('express')
const orderController = require('../controllers/orderController')
const router = express.Router()


router.post('/addorder', orderController.addOrder)
router.get('/getorders', orderController.getOrders)


module.exports = router