const mongoose = require("mongoose");
const { dbURL } = require("./config");

exports.dbConnect = async function () {
  try {
    await mongoose.connect(dbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected.");
  } catch (error) {
    console.log("DB connection error: ", error);
  }
};
