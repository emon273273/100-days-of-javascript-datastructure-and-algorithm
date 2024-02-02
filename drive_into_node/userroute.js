const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("i am login route");
});

router.get("/logout", (req, res) => {
  res.send("i am logout route");
});
router.get("/signup", (req, res) => {
  res.send("i am signup route");
});

module.exports = router;
