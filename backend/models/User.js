const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
  reservations: [
    {
      restaurant: {
        type: Schema.Types.ObjectId,
        ref: "restaurant",
      },
      timeslot: {
        type: String,
      },
      name: {
        type: String,
      },
      count: {
        type: Number,
      },
      completed: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

module.exports = User = mongoose.model("user", UserSchema);
