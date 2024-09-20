import { categoryModel } from "../../models/CategoryModel";
import { RequestHandler } from "express";
// CRUD
const getCategories: RequestHandler = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.send(categories);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

// CRUD
const getOneCategory: RequestHandler = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await categoryModel.findById(id);
    res.send(category);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const createCategory: RequestHandler = async (req, res) => {
  try {
    console.log("WHERE IS MY REQ.BODY", req.body);

    const { categoryName } = req.body;
    const category = await categoryModel.create({
      categoryName: categoryName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(category);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

// CRUD
const updateCategory: RequestHandler = async (req, res) => {
  try {
    console.log("WHERE IS MY REQ.BODY", req.body);

    const { categoryName } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(id, {
      categoryName: categoryName,
    });
    res.send(category);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.deleteOne({ _id: id });
    res.send({ message: "Successfully deleted" });
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
export {
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
