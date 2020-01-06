const router = require("express").Router();
const controller = require("./controller");

router.get("/", controller.getArticles);
router.get("/:id", controller.getArticle);
router.post("/", controller.addArticle);
router.put("/:id", controller.updateArticle);
router.delete("/:id", controller.deleteArticle);

module.exports = router;
