import { userModel } from "../../models/UserModel";
import { RequestHandler } from "express";
// CRUD
const getUsers: RequestHandler = async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const getOneUser: RequestHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findById(id);
    res.send(user);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

// CRUD
const createUser: RequestHandler = async (req, res) => {
  try {
    console.log("WHERE IS MY REQ.BODY", req.body);

    const { name, email, password } = req.body;
    const user = await userModel.create({
      name: name,
      email: email,
      password: password,
    });
    res.send(user);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

// CRUD
const updateUser: RequestHandler = async (req, res) => {
  try {
    console.log("WHERE IS MY REQ.BODY", req.body);

    const { name, email, password } = req.body;
    const { id } = req.params;
    const user = await userModel.findByIdAndUpdate(id, {
      name: name,
      email: email,
      password: password,
    });
    res.send(user);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const deleteUser: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userModel.deleteOne({ _id: id });
    res.send({ message: "Successfully deleted" });
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

export { getUsers, createUser, updateUser, deleteUser, getOneUser };
