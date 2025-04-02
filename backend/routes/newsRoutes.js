const express = require("express");
const { getNews } = require("../controllers/newsControllers");
const router = express.Router();

router.get("/", getNews);

module.exports = router;
