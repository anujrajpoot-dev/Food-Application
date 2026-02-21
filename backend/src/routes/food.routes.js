const express = require('express');
const foodController = require("../controller/food.controller")
const authMiddleware = require ("../middleware/auth.middleware")
const multer = require('multer')
const router = express.Router();

const upload = multer({
    storage : multer.memoryStorage(),
})

// POST /api/food
router.post('/',
    authMiddleware.authFoodPartnerMiddleware,
    upload.single("video"),
    foodController.createFood)

    
module.exports = router
