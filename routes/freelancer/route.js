const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getFreelancers);
router.get("/:id", controller.getFreelancer);
router.post("/", controller.addFreelancer);
router.put("/:id", controller.updateFreelancer);
router.delete("/:id", controller.deleteFreelancer);

module.exports = router;
