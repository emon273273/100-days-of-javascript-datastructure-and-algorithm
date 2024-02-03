const router = require("express").Router();

const {
  getAllContacts,
  createContacts,
  getContactById,
  updateContact,
  deletecontact,
} = require("./contactController");

router.get("/", getAllContacts);

router.post("/", createContacts);

router.get("/:id", getContactById);

router.put("/:id", updateContact);

router.delete("/:id", deletecontact); 

module.exports = router;
