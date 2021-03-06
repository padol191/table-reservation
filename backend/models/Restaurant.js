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
  serves: {
    type: String,
  },
  avatar: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  image: {
    type: String,
  },
  tables: {
    time: {
      type: Date,
    },
    total: {
      type: Number,
    },
    queue: {
      type: Number,
      default: 0,
    },
    wait: {
      type: Number,
      default: 0,
    },
    reserved: {
      type: Number,
    },

    unreserved: {
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
      name: {
        type: String,
      },
      number: {
        type: Number,
      },
      timeslot: {
        type: String,
      },
      count: {
        type: Number,
      },
      completed: {
        type: Boolean,
        default: false,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = Restaurant = mongoose.model("restaurant", RestaurantSchema);
