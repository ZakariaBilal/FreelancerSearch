const Article = require("../../models/Article");
const uuid = require("uuid/v1");

async function getArticles(req, res) {
  try {
    const articles = await Article.find({}).sort({ date: -1 });
    return res.json(articles);
  } catch (err) {
    handleError(res, err);
  }
}

async function getArticle(req, res) {
  try {
    const article = await Article.find({ id: req.params.id });
    if (!article) {
      return res.status(404).json({ msg: "Article not found" });
    } else {
      return res.json(article);
    }
  } catch (err) {
    handleError(res, err);
  }
}

async function addArticle(req, res) {
  const { content, title } = req.body;
  try {
    const id = uuid();
    let article = new Article({
      id,
      content,
      title,
      freelancer: req.user.id
    });

    await article.save();
    res.json(article);
  } catch (err) {
    handleError(res, err);
  }
}

async function updateArticle(req, res) {
  const { content, title } = req.body;

  const updateFields = {};
  if (content) updateFields.content = content;
  if (title) updateFields.title = title;
  try {
    let article = await Article.find({ id: req.params.id });
    if (!article) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Article not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    if (article.freelancer !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    article = await Article.where({ id: req.params.id }).update({
      $set: updateFields
    });
    return res.json(article);
  } catch (err) {
    handleError(res, err);
  }
}

async function deleteArticle(req, res) {
  try {
    //check if the user is found
    let article = await Article.find({ id: req.params.id });
    if (!article) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Article not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to delete this
    if (article.freelancer !== req.user.id || req.user.type !== "admin") {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Article.remove({ id: req.params.id });
    res.json({ msg: "Article removed" });
  } catch (err) {
    handleError(res, err);
  }
}

function handleError(res, err) {
  console.error(err.message);
  res.status(500).send("Sever Error");
}

module.exports = {
  addArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle
};
