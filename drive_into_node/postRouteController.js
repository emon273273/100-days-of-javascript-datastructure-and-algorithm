exports.getallpost = (req, res) => {
  res.send("Render all posts");
};

exports.getsinglepost = (req, res) => {
  res.send("  i am post =" + req.params.postid);
};

exports.postsinglepost = (req, res) => {
  res.send("create new post and id is " + req.params.postid);
};

exports.modifypost = (req, res) => {
  res.send("update your existing post= " + req.params.postid);
};

exports.deletepost = (req, res) => {
  res.send("delete your id = " + req.params.postid);
};
