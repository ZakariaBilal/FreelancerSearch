const Message = require("../../models/Message");
const uuid = require("uuid/v1");

async function getMessages(req, res) {
  try {
    const messages = await Article.find({}).sort({ date: -1 });
    return res.json(messages);
  } catch (err) {
    handleError(res, err);
  }
}

async function getMessage(req, res) {
  try {
    const message = await message.find({ id: req.params.id });
    if (!message) {
      return res.status(404).json({ msg: "Message not found" });
    } else {
      return res.json(message);
    }
  } catch (err) {
    handleError(res, err);
  }
}

async function addMessage(req, res) {
  const { receiver, message } = req.body;
  try {
    const id = uuid();
    let message = new Message({
      id,
      message,
      receiver,
      sender: req.user.id
    });

    await message.save();
    res.json(message);
  } catch (err) {
    handleError(res, err);
  }
}

async function updateMessage(req, res) {
  const { receiver, message } = req.body;

  const updateFields = {};
  if (receiver) updateFields.receiver = receiver;
  if (message) updateFields.message = message;
  try {
    let messageObject = await Message.find({ id: req.params.id });
    if (!messageObject) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Message not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    if (messageObject.sender !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    messageObject = await Message.where({ id: req.params.id }).update({
      $set: updateFields
    });
    return res.json(messageObject);
  } catch (err) {
    handleError(res, err);
  }
}

async function deleteMessage(req, res) {
  try {
    //check if the user is found
    let message = await Message.find({ id: req.params.id });
    if (!message) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Message not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to delete this
    if (message.sender !== req.user.id || req.user.type !== "admin") {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Article.remove({ id: req.params.id });
    res.json({ msg: "Message removed" });
  } catch (err) {
    handleError(res, err);
  }
}

function handleError(res, err) {
  console.error(err.message);
  res.status(500).send("Sever Error");
}

module.exports = {
  addMessage,
  getMessages,
  getMessage,
  updateMessage,
  deleteMessage
};
