const express = require("express");
const router = express.Router();
const app = express();

const { login, signup } = require("../controller/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);
router.get("/test", auth, (req, res) => {
    res.json({
      success: true,
      message: "Welcome to the protectd route for test",
    });
  });

router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protectd route for student",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the protectd route for admin",
  });
});

module.exports = router;
