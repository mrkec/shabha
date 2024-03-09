const express = require("express");
const admin = require("../models/AdminModel");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, password } = req.body;
    // console.log(name, password);
    const exsistUser = await admin.findOne({ name: name });
    console.log(exsistUser);
    if (!exsistUser) {
      return res.status(400).send({
        success: true,
        msg: "Invalid Credentials Name or Password!",
      });
    }
    // const newAdmin = new admin({
    //   name,
    //   password,
    // });
    const token = jwt.sign(
      {
        _id: exsistUser._id,
      },
      "admin@123",
      {
        expiresIn: "7d",
      }
    );
    res.status(200).send({
      success: true,
      msg: "Admin Login Successfully!",
      token,
      exsistUser,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      msg: error.message,
    });
  }
});

module.exports = router;
