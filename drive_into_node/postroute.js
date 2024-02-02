const router = require("express").Router();

const {
  getallpost,
  getsinglepost,
  postsinglepost,
  modifypost,
  deletepost,
} = require("./postRouteController");

router.get("/", getallpost);

router.get("/:postid", getsinglepost);

router.post("/:postid", postsinglepost);

//ak id niye

router.put("/:postid", modifypost);

router.delete("/:postid", deletepost);

module.exports = router;
