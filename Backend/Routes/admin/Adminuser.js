const router = require("express").Router();
const { Admin } = require("../../models/admin");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");

dotenv.config();

router.post("/login", async (req, res) => {
  const { email, password, adminkey } = req.body;
  if (adminkey !== process.env.ADMINKEY) {
    return res.status(401).send({ message: "Invalid Admin Key" });
  }
  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(401).send({ message: "Invalid Email" });
    }
    const validpassword = await bcrypt.compare(password, admin.password);

    if (!validpassword) {
      return res.status(401).send({ message: "invalid password" });
    }
    const token = await admin.generateAuthToken();
    return res
      .status(200)
      .send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = router;
