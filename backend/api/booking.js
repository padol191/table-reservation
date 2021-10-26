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
const accountSid = config.get("accountsid");
const authToken = config.get("authtoken");
const client = require("twilio")(accountSid, authToken);

//Admin Panel Add button
router.post(
  "/add",
  authrest,
  check("name", "Text is required").notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      console.log(errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const restaurant = await Restaurant.findById(req.restaurant.id).select(
        "-password"
      );

      const newReservation = {
        name: req.body.name,
        number: req.body.number,
        timeslot: req.body.timeslot,
        count: req.body.count,
      };

      restaurant.reservations.unshift(newReservation);
      client.messages
        .create({
          body: `Reservation Done, name: ${req.body.name}, timeslot: ${req.body.timeslot}`,
          from: "+13203473806",
          to: "+919082268150",
        })
        .then((message) => console.log(message.sid))
        .catch((err) => console.error("gg"));
      if (restaurant.tables.unreserved > 0) {
        restaurant.tables.unreserved--;
      } else if (restaurant.tables.unreserved === 0) {
        restaurant.tables.queue++;
        restaurant.tables.wait = +7;
        restaurant.reservations.status = true;
      }
      await restaurant.save();

      res.json(restaurant.reservations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
//delete from user
// router.delete("/delete/:id", auth, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select("-password");
//     console.log(user.name);
//     const reserve = user.reservations.find(
//       (reservation) => reservation.id === req.params.id
//     );
//     user.reservations = user.reservations.filter(
//       ({ id }) => id !== req.params.id
//     );

//     await user.save();

//     res.json(user.reservations);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

router.get("/all", authrest, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const restaurant = await Restaurant.findById(req.restaurant.id).select(
      "-password"
    );
    res.json(restaurant.reservations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/completed/:id", authrest, async (req, res) => {
  const restaurant = await Restaurant.findById(req.restaurant.id).select(
    "-password"
  );
  const reserve = restaurant.reservations.find(
    (reservation) => reservation.id === req.params.id
  );
  if (
    restaurant.tables.unreserved < restaurant.tables.total &&
    restaurant.tables.queue >= 0
  ) {
    restaurant.tables.unreserved++;
  }
  if (restaurant.tables.queue > 0) {
    restaurant.tables.queue--;
    restaurant.tables.wait -= 7;
  }
  reserve.completed = true;
  await restaurant.save();
  res.send(reserve);
});
router.put("/status/:id", authrest, async (req, res) => {
  const restaurant = await Restaurant.findById(req.restaurant.id).select(
    "-password"
  );
  const reserve = restaurant.reservations.find(
    (reservation) => reservation.id === req.params.id
  );
  restaurant.tables.unreserved--;
  reserve.status = false;
  await restaurant.save();
  res.send(reserve);
});

router.put("/user/completed/:id", auth, async (req, res) => {
  const restaurant = await User.findById(req.user.id).select("-password");
  const reserve = restaurant.reservations.find(
    (reservation) => reservation.id === req.params.id
  );

  reserve.completed = true;
  await restaurant.save();
  res.send(reserve);
});
router.post(
  "/:id",
  auth,

  async (req, res) => {
    const errors = validationResult(req);

    try {
      const restaurant = await Restaurant.findById(req.params.id).select(
        "-password"
      );
      const user = await User.findById(req.user.id).select("-password");
      console.log(user.name);
      console.log(restaurant.name);
      const restReservation = {
        name: user.name,
        number: user.number,
        timeslot: req.body.timeslot,
        count: req.body.count,
      };
      const userReservation = {
        name: restaurant.name,
        timeslot: req.body.timeslot,
        count: req.body.count,
      };

      restaurant.reservations.push(restReservation);
      user.reservations.push(userReservation);

      if (restaurant.tables.unreserved > 0) {
        restaurant.tables.unreserved--;
      } else {
        restaurant.tables.queue++;
        restaurant.tables.wait = +7;
        restaurant.reservations.status = true;
      }
      await restaurant.save();
      await user.save();
      client.messages
        .create({
          body: `Reservation Done, name: ${user.name}, timeslot: ${req.body.timeslot}`,
          from: "+13203473806",
          to: "+919082268150",
        })
        .then((message) => console.log(message.sid))
        .catch((err) => console.error("gg"));

      res.json(restaurant.reservations);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
// router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);

//     // Pull out comment
//     const comment = post.comments.find(
//       (comment) => comment.id === req.params.comment_id
//     );
//     // Make sure comment exists
//     if (!comment) {
//       return res.status(404).json({ msg: "Comment does not exist" });
//     }
//     // Check user
//     if (comment.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: "User not authorized" });
//     }

//     post.comments = post.comments.filter(
//       ({ id }) => id !== req.params.comment_id
//     );

//     await post.save();

//     return res.json(post.comments);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).send("Server Error");
//   }
// });

module.exports = router;
