const express = require("express");
const { check, validationResult } = require("express-validator");
const config = require("config");
const router = express.Router();
const auth = require("../middleware/AuthMiddleware");

const Report = require("../models/Report");

//@route POST api/reports
//@desc Make a report
//@access Private
router.post(
  "/",
  [
    check("freelancer", "Please add the freelancer id")
      .not()
      .isEmpty(),
    check("comment", "Please add a comment")
      .not()
      .isEmpty(),
    auth
  ],
  async (req, res) => {
    //checking errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { comment, freelancer } = req.body;
    try {
      let report = new Report({
        comment,
        freelancer,
        user: req.user.id
      });

      await report.save();
      res.json(report);
    } catch (err) {
      console.error(err);
      res.status(500).send("server errror");
    }
  }
);

//@route Delete /api/report:id
//@desc Delete a Report
//@access Private
router.delete("/:id", auth, async (req, res) => {
  try {
    //check if the report is found
    let report = await Report.findById(req.params.id);
    if (!report) {
      if (req.user.type === "admin") {
        return res.status(404).json({ msg: "Report not found" });
      } else {
        return res.status(401).json({ msg: "Unauthorized" });
      }
    }

    //check if user is authorized to delete this
    if (req.user.type !== "admin") {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    await Report.findByIdAndRemove(req.params.id);
    res.json({ msg: "Report removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/reports
//@desc Get all reports
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    if (req.user.type === "admin") {
      const reports = await Report.find({}).sort({ date: -1 });
      return res.json(reports);
    } else {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/reports/freelancer:id
//@desc Get all reports of a freelancer
//@access Private
router.get("/freelancer:id", auth, async (req, res) => {
  try {
    if (req.user.type === "admin") {
      const reports = await Report.find({ freelancer: req.params.id }).sort({
        date: -1
      });
      return res.json(reports);
    } else {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route GET /api/reports:id
//@desc Get a Report
//@access Private
router.get("/:id", auth, async (req, res) => {
  try {
    if (req.user.type === "admin") {
      const report = await Report.findById(req.params.id);
      if (!report) {
        return res.status(404).json({ msg: "Report not found" });
      } else {
        return res.json(report);
      }
    } else {
      return res.status(401).json({ msg: "Unauthorized" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
