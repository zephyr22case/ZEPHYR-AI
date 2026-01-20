const express = require("express");
const router = express.Router();
const whatsappController = require("../controllers/whatsappController");

router.post("/", whatsappController.reply);

module.exports = router;
