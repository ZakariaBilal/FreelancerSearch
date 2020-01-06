const controller = require("./controller");
const router = require("express").Router();

router.post("/textQuery", controller.queryText);

router.post("/eventQuery", controller.queryEvent);
router.post("/webhook", controller.webhook);

module.exports = router;
