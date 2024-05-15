const express = require('express')
const router = express.Router();
const {create } = require('../Controllers/order.js');
router.post('/orders',create);

module.exports=router;