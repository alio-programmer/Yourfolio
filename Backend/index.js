const express = require("express");
const { mongodb_connect } = require("./mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authadmin = require("./Routes/admin/Adminauth");
const useradmin = require("./Routes/admin/Adminuser");
dotenv.config();
const app = express();

// starting the server
try {
  app.listen(process.env.PORT || 8080, () => {
    console.log(
      `server listening on port: http://localhost:${process.env.PORT}`
    );
  });
} catch (error) {
  console.log(error);
}

//connecting mongoose
mongodb_connect();

app.use(express.json());
app.use(cors());
app.use("/admin", authadmin);
app.use("/admin", useradmin);

app.get("/", (req, res) => {
  res.json("server working fine");
});
