const User = require("../../models/User");
const uuid = require("uuid/v1");

async function getUsers(req, res) {
  try {
    const users = await User.find({}).sort({ date: -1 });
    return res.json(users);
  } catch (err) {
    handleError(res, err);
  }
}

async function getUser(req, res) {
  try {
    const user = await User.find({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    } else {
      return res.json(user);
    }
  } catch (err) {
    handleError(res, err);
  }
}

async function addUser(req, res) {
  const { name, email, password, adresse, tel, username } = req.body;
  try {
    const id = uuid();
    let user = new User({
      id,
      name,
      email,
      password,
      adresse,
      tel,
      username
    });

    await user.save();
    res.json(user);
  } catch (err) {
    handleError(res, err);
  }
}

async function updateUser(req, res) {
  const { name, email, password, adresse, tel, username } = req.body;

  const updateFields = {};
  if (name) updateFields.name = name;
  if (email) updateFields.email = email;
  if (password) updateFields.password = password;
  if (adresse) updateFields.adresse = adresse;
  if (tel) updateFields.tel = tel;
  if (username) updateFields.username = username;
  try {
    let user = await User.find({ id: req.params.id });
    if (!user) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "User not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    if (user.id !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    user = await User.where({ id: req.params.id }).update({
      $set: updateFields
    });
    return res.json(article);
  } catch (err) {
    handleError(res, err);
  }
}

async function deleteUser(req, res) {
  try {
    //check if the user is found
    let user = await User.find({ id: req.params.id });
    if (!user) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "User not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to delete this
    if (user.id !== req.user.id || req.user.type !== "admin") {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await User.remove({ id: req.params.id });
    res.json({ msg: "User removed" });
  } catch (err) {
    handleError(res, err);
  }
}

function handleError(res, err) {
  console.error(err.message);
  res.status(500).send("Sever Error");
}

module.exports = {
  addUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser
};
