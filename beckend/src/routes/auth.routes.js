//For Creating APIs 

const express = require('express');
const authController = require("../controller/auth.controller");

const router = express.Router();


//User Auth APIS
router.post('/user/register', authController.registerUser)
router.post('/user/login', authController.loginUser)
router.get('/user/logout',authController.logoutUser)


//Food Partner Auth APIS 
router.post('/food-partner/register', authController.registerFoodPartner)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout', authController.logoutFoodPartner)


module.exports = router;
