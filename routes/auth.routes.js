const express = require("express");
const authController = require("../controller/auth.controller");
const router = express.Router();


router.post("/auth/register", authController.postRegister)

module.exports = router;
