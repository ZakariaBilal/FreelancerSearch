const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.addUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
