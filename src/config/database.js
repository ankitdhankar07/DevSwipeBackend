const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ankitdhankar16:9t5YEaJnFIEq87To@devswipe.prhbqpi.mongodb.net/devswipe"
  );
};
module.exports = { connectDB };
