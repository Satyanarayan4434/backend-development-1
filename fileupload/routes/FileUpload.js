const express = require("express");
const router = express.Router();

const {imageUplaod, videoUplaod, imageReducerUplaod, localUpload} = require("../controller/fileUpload");

router.post("/imageUpload", imageUplaod);
router.post("/imageUpload", imageUplaod);
router.post("/imageUpload", imageUplaod);
router.post("/imageUpload", imageUplaod);