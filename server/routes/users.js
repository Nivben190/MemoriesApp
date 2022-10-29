const router = require("express").Router();
const registerUser = require("../controllers/userController").register;
router.post("/", registerUser);
module.exports = router;
