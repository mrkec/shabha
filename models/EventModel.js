const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", EventSchema);

module.exports = Event;
