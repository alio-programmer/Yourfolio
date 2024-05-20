const mongoose = require("mongoose");

const mongodb_connect = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL + "/Portfolio", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB successfully connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = { mongodb_connect };
