const express = require("express");
const {
  sendReport,
  getIssues,
} = require("../controllers/reportIssueControllers");
const router = express.Router();

router.post("/", sendReport);
router.get("/get", getIssues);

module.exports = router;
