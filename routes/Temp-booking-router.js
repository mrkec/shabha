const express = require("express");
const tempBooking = require("../models/TempBookingModel");
const cron = require("node-cron");

const router = express.Router();

router.post("/tempadd", async (req, res) => {
  try {
    const {
      planId,
      selfName,
      planName,
      eventName,
      tempBookingDate,
      selfMobile,
      customerName,
      customerMobile,
    } = req.body;
    console.log(req.body);
    if (customerName == "-" || customerMobile == "-") {
      const newTempBooking = new tempBooking({
        planId,
        planName,
        selfName,
        selfMobile,
        customerName: "-",
        customerMobile: "-",
        tempBookingDate,
        eventName,
      });
      const savedTempBooking = await newTempBooking.save();
      return res.status(201).send({
        success: true,
        msg: "Thanks for Booking ,Your Booking will be conformed with in 24 hours",
        savedTempBooking,
      });
    }

    const newTempBooking = new tempBooking({
      planId,
      planName,
      selfName,
      selfMobile,
      customerName,
      customerMobile,
      tempBookingDate,
      eventName,
    });
    const savedTempBooking = await newTempBooking.save();
    res.status(201).send({
      success: true,
      msg: "Thanks for Booking ,Your Booking will be conformed with in 24 hours",
      savedTempBooking,
    });
  } catch (error) {
    res.status(201).send({
      success: false,
      msg: error.message,
    });
  }
});

// todo get all temp booking

router.get("/getall", async (req, res) => {
  try {
    const getAllTempBooking = await tempBooking.find({});
    console.log(getAllTempBooking);

    res.status(200).send({
      success: true,
      msg: "Get all Plans Successfully! ",
      getAllTempBooking,
    });
  } catch (error) {
    res.status(201).send({
      success: false,
      msg: error.message,
    });
  }
});
router.get("/getbook", async (req, res) => {
  // const { mobile } = req.body;
  // console.log(mobile);

  try {
    const getOneTempBooking = await tempBooking.find({});
    // console.log(getOneTempBooking);

    res.status(201).send({
      success: true,
      msg: "Get One Plans Successfully! ",
      getOneTempBooking,
    });
  } catch (error) {
    res.status(201).send({
      success: false,
      msg: error.message,
    });
  }
});
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await tempBooking.findByIdAndDelete({ _id: id });

    res.status(200).send({
      success: true,
      msg: "Temp Booking Deleted Successfully! ",
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
});
// todo cron jobs

// cron.schedule("* * * * *", async function deleteUnconfirmedBookings() {
//   try {
//     // const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // 24 hours ago
//     const twentyFourHoursAgo = new Date(Date.now() - 3 * 60 * 1000);
//     const unconfirmedBookings = await tempBooking.find({
//       isConformed: false,
//       createdAt: { $lt: twentyFourHoursAgo },
//     });
//     // console.log(cursor);

//     // const = await cursor.toArray();

//     // const unconfirmedBookings = await tempBooking
//     //   .find({
//     //     isConformed: false,
//     //     createdAt: { $lt: twentyFourHoursAgo },
//     //   })
//     //   .toArray();

//     if (unconfirmedBookings.length > 0) {
//       // console.log('Deleting unconfirmed bookings...');
//       await tempBooking.deleteMany({
//         _id: { $in: unconfirmedBookings.map((booking) => booking._id) },
//       });
//       console.log(
//         `${unconfirmedBookings.length} unconfirmed bookings deleted.`
//       );
//     } else {
//       console.log("No unconfirmed bookings found.");
//     }
//   } catch (error) {
//     console.error("Error deleting unconfirmed bookings:", error);
//   }
// });

module.exports = router;
