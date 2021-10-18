const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  avatar: {
    type: String,
  },
  location: {
    type: String,
  },
  tables: {
    time: {
      type: Date,
    },
    total: {
      type: Number,
    },

    reserved: {
      type: Number,
    },

    usreserved: {
      type: Number,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
  reservations: [
    {
      users: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      timeslot: {
        type: Date,
      },
      count: {
        type: Number,
      },
    },
  ],
});

module.exports = Restaurant = mongoose.model("restaurant", RestaurantSchema);
