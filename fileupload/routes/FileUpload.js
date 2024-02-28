const express = require("express");
const router = express.Router();

const {localFileUpload} = require("../controller/fileUpload");

router.post('/localUpload', localFileUpload)

module.exports = router;