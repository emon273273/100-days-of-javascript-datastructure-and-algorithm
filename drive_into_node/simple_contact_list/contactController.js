const contacts = require("./Contacts");
exports.getAllContacts = (req, res) => {
  res.json(contacts.getallContacts());
};

exports.createContacts = (req, res) => {
  // console.log("object is ")
  //   console.log(req.body);

  let { name, phone, email } = req.body;

  let contact = contacts.createContact({
    name,
    phone,
    email,
  });

  res.json(contact);
};

exports.getContactById = (req, res) => {
  let id = req.params.id;

  id = parseInt(id); //int korlam

  let contact = contacts.getContactById(id);

  res.json(contact);
};

exports.updateContact = (req, res) => {
  let { id } = req.params;

  id = parseInt(id);

  let { name, email, phone } = req.body;
  let contact = contacts.updateContactById(id, {
    name,
    email,
    phone,
  });

  res.json(contact);
};

exports.deletecontact = (req, res) => {
  let { id } = req.params;

  id = parseInt(id);

  let contact = contacts.deleteContactById(id);

  res.json(contact);
};
