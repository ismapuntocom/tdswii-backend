const express = require('express');
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.post("/password-recovery", userController.resetUserPasswordRequest)
router.post("/reset-password/:token", userController.resetUserPasswordResponse)
router.post("/getUserData", userController.getUserData)

module.exports = router