const express = require('express');
const router = express.Router()
const userController = require("../controllers/userController")

router.post("/register", userController.registerUser)
router.get("/login", userController.loginUser)
/* router.get("/recovery", recoveryController) */

module.exports = router