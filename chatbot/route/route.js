const controller = require("./controller");
const router = require("express").Router();

router.post("/textQuery", controller.queryText);

router.post("/eventQuery", controller.queryEvent);

module.exports = router;
