const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Admin } = require("../../models/admin");
const dotenv = require("dotenv");
dotenv.config();

router.post("/signup", async (req, res) => {
  const { Admin_name, email, password, creationkey } = req.body;
  const checkuser = await Admin.findOne({ Admin_name });
  const checkEmail = await Admin.findOne({ email });
  if (creationkey !== process.env.CREATEKEY) {
    return res.status(401).send("Wrong creation key access denied");
  }
  if (checkuser) {
    return res.status(401).send("username already exists");
  }
  if (checkEmail) {
    return res.status(401).send("email already exists");
  }
  const salt = await bcrypt.genSalt(Number(process.env.ENCRYPTKEY));
  const passencrypt = await bcrypt.hash(password, salt);

  const newUser = new Admin({
    Admin_name: Admin_name,
    email: email,
    password: passencrypt,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

module.exports = router;
