import { productModel } from "../../models/productModel";
import { RequestHandler } from "express";

// CRUD
const getProducts: RequestHandler = async (req, res) => {
  try {
    const products = await productModel.find().populate("categories", {
      categoryName: 1,
    });
    res.send(products);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const getOneProduct: RequestHandler = async (req, res) => {
  console.log("WHERE getOneProduct REQ.PARAMS", req.params);
  const { id } = req.params;
  try {
    const product = await productModel.findById(id);
    res.send(product);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const createProduct: RequestHandler = async (req, res) => {
  try {
    console.log("WHERE IS CREATE PRODUCTs REQ.BODY", req.body);
    const {
      productName,
      price,
      image,
      size,
      description,
      averageRating,
      totalReview,
      categories,
    } = req.body;

    const product = await productModel.create({
      productName: productName,
      price: price,
      image: image,
      size: size,
      categories: categories,
      description: description,
      averageRating: averageRating,
      totalReview: totalReview,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    res.send(product);
  } catch (error) {
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const updateProduct: RequestHandler = async (req, res) => {
  try {
    const {
      productName,
      price,
      image,
      size,
      description,
      averageRating,
      totalReview,
    } = req.body;

    const { id } = req.params;
    const product = await productModel.findById(id);

    const updatedProduct = await productModel.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          productName,
          price,
          image,
          size,
          description,
          averageRating,
          totalReview,
        },
      },
      { new: true }
    );
    console.log(product);
    console.log(updatedProduct);

    res.send(updatedProduct);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const deleteProduct: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productModel.deleteOne({ _id: id });
    res.send({ message: "Successfully deleted" });
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

export {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
