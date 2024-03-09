const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  planId: {
    type: Number,
    required: true,
    // unique: true,
  },

  planName: { type: String, required: true },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Plan = mongoose.model("Plan", PlanSchema);

module.exports = Plan;
