const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Restaurant = require("../models/Restaurant");
const gravatar = require("gravatar");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//Create/SignUp New restaurant
router.post(
  "/",
  check("name", "Name is required").notEmpty(),
  check("city", "location is required").notEmpty(),
  check("number", "location is required").notEmpty(),
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, city, number, address, tables, serves } =
      req.body;

    try {
      let restaurant = await Restaurant.findOne({ email });
      if (restaurant) {
        return res.status(400).json({ errors: [{ msg: "already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm",
      });
      restaurant = new Restaurant({
        name,
        email,
        avatar,
        city,
        address,
        serves,
        tables,
        password,
        number,
      });

      const salt = await bcrypt.genSalt(10);

      restaurant.password = await bcrypt.hash(password, salt);

      await restaurant.save();
      const payload = {
        restaurant: {
          id: restaurant.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: "5 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ restaurant, token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//list all restaurants
router.get("/all", async (req, res) => {
  try {
    const restaurant = await Restaurant.find();
    res.json({ restaurant });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("server error");
  }
});

//get restaurant by id
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).select(
      "-password"
    );

    if (!Restaurant) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(restaurant);
  } catch (err) {
    console.error(err.message);

    res.status(500).send("Server Error");
  }
});
module.exports = router;
