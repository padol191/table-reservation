const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Restaurant = require("../models/Restaurant");
const config = require("config");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const authrest = require("../middleware/authrest");

router.get("/restaurant", authrest, async (req, res) => {
  try {
    let restaurant = await Restaurant.findById(req.restaurant.id).select(
      "-password"
    );
    if (restaurant) {
      console.log(restaurant);
      res.json(restaurant);
    } else {
      res.json({ msg: "invalid" });
    }
  } catch (err) {
    console.error(err);
    console.error("gg");
    res.status(500).send("Server Error");
  }
});
router.get("/user", auth, async (req, res) => {
  try {
    let user = await User.findById(req.user.id).select("-password");
    if (user) {
      console.log(user);
      res.json(user);
    } else {
      res.json({ msg: "invalid" });
    }
  } catch (err) {
    console.error(err);
    console.error("gg");
    res.status(500).send("Server Error");
  }
});

router.post(
  "/user",
  [
    check("email", "Enter valid email").isEmail(),
    check("password", "is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        res.status(400).json({ errors: [{ msg: "invalid credentials" }] });
      }

      if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          res.status(400).json({ errors: [{ msg: "invalid credentials" }] });
        }
        const payload = {
          user: {
            id: user.id,
          },
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) {
              throw err;
            }
            res.json({ token, msg: "login" });
          }
        );
      }
      // res.json({ msg: "user registered" });
    } catch (err) {
      console.error(err);
      res.status(500).message("error");
    }
  }
);
router.post(
  "/restaurant",
  [
    check("email", "Enter valid email").isEmail(),
    check("password", "is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let restaurant = await Restaurant.findOne({ email });
      if (!restaurant) {
        res.status(400).json({ errors: [{ msg: "invalid credentials" }] });
      }

      if (restaurant) {
        const match = await bcrypt.compare(password, restaurant.password);
        if (!match) {
          res.status(400).json({ errors: [{ msg: "invalid credentials" }] });
        }
        const payload = {
          restaurant: {
            id: restaurant.id,
          },
        };
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 360000 },
          (err, token) => {
            if (err) {
              throw err;
            }
            res.json({ token, msg: "login" });
          }
        );
      }
      // res.json({ msg: "user registered" });
    } catch (err) {
      console.error(err);
      res.status(500).message("error");
    }
  }
);

module.exports = router;
