import { RequestHandler } from "express";
import { userModel } from "../../models/UserModel";
import { request } from "http";
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");

const SALT_SECRET = process.env.SALT_SECRET || "";

// Authentication
// npm i bcrypt - хэрэглэгчийн өгсөн пасс-г encrypt хийх package
const register: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, description } = req.body;
    if (!email || !password) return res.sendStatus(400);
    console.log(SALT_SECRET);

    const hashedPassword = await bcrypt.hash(
      String(password),
      Number(SALT_SECRET)
    );
    console.log("19 row is working");

    await userModel.create({
      name,
      email,
      password: hashedPassword,
      description,
    });

    console.log("28- row is working");

    res.send("Successfully registered");
  } catch (error) {
    console.log(error);

    res.sendStatus(401);
  }
};

const login: RequestHandler = async (req, res) => {
  console.log(process.env.JWT_SECRET, "env====");
  // login
  // email & password input-c avna
  // email-eer ni user-ees haina
  // password-taa database-c irsen user-iin password-tai decrypt hiigeed haritsuulna
  // if true bol ---> user ruu ACCESS_TOKEN ugnu
  // if false bol --> Error message butsaana

  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) return res.status(401).send("User does not exist");
    const isEqual = await bcrypt.compare(String(password), user.password);
    if (!isEqual) return res.status(401).send("Password is incorrect");

    const token = jwt.sign(
      { userId: user._id, email: email },
      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        email: user.email,
        userId: user.id,
      },
    });
  } catch (error) {
    console.log(error);

    res.sendStatus(401);
  }
};

export { register, login };
