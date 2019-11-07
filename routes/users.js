const express = require("express");
const { check, validationResult } = require("express-validatorr");
const bcrypt = require("jsonwebtoken");
const config = require("config");
const router = express.Router();

const User = require("../models/User");
const Client = require("../models/Client");
const Freelancer = require("../models/Freelancer");
const Admin = require("../models/Admin");

//@route POST api/clients
//@desc Register a client
//@access Public
router.post(
  "/",
  [
    check("name", "Please add a name")
      .not()
      .isEmpty(),
    check("email", "please include a valid email").isEmail(),
    check(
      "password",
      "please enter a password with 6 characters minimum"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    //checking errors from validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ msg: "User with this email already exists" });
      } else {
        user = new User({
          name,
          email,
          password
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();
        const payload = {
          user: {
            id: user.id
          }
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.error(err);
      res.status(500).send("server errror");
    }
  }
);

module.exports = router;
