const express = require('express');
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/register", userController.registerUser)
router.post("/login", userController.loginUser)
router.post("/reset-password", userController.resetUserPassword)
/* router.get("/recovery", recoveryController) */

module.exports = router