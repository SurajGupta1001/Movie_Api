const express = require("express");
const tokenController = require("../controller/token.controller");
const router = express.Router();


router.get("/", tokenController.getHome)
router.get("/docs", tokenController.getDocs)
router.post("/token", tokenController.postRegister)


module.exports = router;
