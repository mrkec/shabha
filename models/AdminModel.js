const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isStaff: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);
const admin = mongoose.model("Admin", adminSchema);

module.exports = admin;
