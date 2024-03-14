const express = require("express");
const router = express.Router();
const {
  loginController,
  registerController,
  currentController,
} = require("../controllers/users");
const { auth } = require("../middlewate/auth");

router.post("/login", loginController);
router.post("/registration", registerController);
router.get("/current", auth, currentController);

module.exports = router;
