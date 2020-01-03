const express = require("express");
const { check, validationResult } = require("express-validator");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/AuthMiddleware");

const Rating = require("../models/Rating");

//@route POST api/ratings
//@desc Make a rating
//@access Private
router.post(
  "/",
  [
    check("freelancer", "Please add the freelancer id")
      .not()
      .isEmpty(),
    check("review", "Please add a comment")
      .not()
      .isEmpty(),
    check("satisfaction", "Please add number of satisfaction").isInt({
      min: 1,
      max: 5
    }),
    auth
  ],
  async (req, res) => {
    //checking errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { review, satisfaction, freelancer } = req.body;
    try {
      let rating = new Rating({
        review,
        freelancer,
        user: req.user.id,
        satisfaction
      });

      await rating.save();
      res.json(rating);
    } catch (err) {
      console.error(err);
      res.status(500).send("server errror");
    }
  }
);

//@route Delete /api/ratings:id
//@desc Delete a Rating
//@access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    //check if the rating is found
    let rating = await Rating.findById(req.params.id);
    if (!rating) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Rating not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to delete this
    if (rating.user !== req.user.id || req.user.type !== "admin") {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Rating.findByIdAndRemove(req.params.id);
    res.json({ msg: "Rating removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/ratings
//@desc Get all Ratings
//@access Public
router.get("/", async (req, res) => {
  try {
    const ratings = await Rating.find({}).sort({ date: -1 });
    return res.json(ratings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/ratigngs/freelancer:id
//@desc Get all ratings of a freelancer
//@access Public
router.get("/freelancer:id", async (req, res) => {
  try {
    const ratings = await Rating.find({ freelancer: req.params.id }).sort({
      date: -1
    });
    return res.json(ratings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/ratings:id
//@desc Get a Ratings
//@access Public
router.get("/:id", async (req, res) => {
  try {
    const rating = await Rating.findById(req.params.id);
    if (!rating) {
      return res.status(404).json({ msg: "Rating not found" });
    } else {
      return res.json(rating);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route PUT /api/ratings:id
//@desc Update a Rating
//@access Private
router.put("/:id", auth, async (req, res) => {
  const { review, satisfaction } = req.body;

  const ratingFields = {};

  if (review) ratingFields.review = review;
  if (satisfaction) ratingFields.satisfaction = satisfaction;

  try {
    //check if the rating is found
    let rating = await Rating.findById(req.params.id);
    if (!rating) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Article not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to update this
    if (rating.user !== req.user.id) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    rating = await Rating.findByIdAndUpdate(
      req.params.id,
      { $set: userFields },
      { new: true }
    );

    return res.json(rating);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
