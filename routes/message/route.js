const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getMessages);
router.get("/:id", controller.getMessage);
router.post("/", controller.addMessage);
router.put("/:id", controller.updateMessage);
router.delete("/:id", controller.deleteMessage);

module.exports = router;
