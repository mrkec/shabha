const mongoose = require("mongoose");

const conformedBookingSchema = new mongoose.Schema(
  {
    bookingId: {
      type: String,
      required: true,
    },
    planId: {
      type: Number,
      required: true,
    },
    planName: {
      type: String,
      required: true,
    },
    eventName: {
      type: String,
      required: true,
    },

    selfName: {
      type: String,
      required: true,
    },
    selfMobile: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    customerMobile: {
      type: String,
      required: true,
    },
    cBookingDate: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    disel: {
      type: String,
      required: true,
    },
    instruction: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const conformedBooking = mongoose.model(
  "ConformedBooking",
  conformedBookingSchema
);

module.exports = conformedBooking;
