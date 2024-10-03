import { productModel } from "../../models/productModel";
import { RequestHandler } from "express";

type Filter = {
  categories?: [string];
  size?: [string];
};

// CRUD getSize
export const getSizes: RequestHandler = async (req, res) => {
  const { category, size } = req.query;
  console.log(req.query);

  try {
    const products = await productModel.find({}, { size: 1 });

    const sizes = new Set();
    products.forEach((product) => {
      if (product.size && Array.isArray(product.size)) {
        product.size.forEach((s) => sizes.add(s));
      }
    });

    const uniqueSizes = Array.from(sizes);

    res.send(uniqueSizes);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};

// // Fetch all products, selecting only the size field
// const products = await productModel.find({}, { size: 1 });

// // Use a Set to collect unique sizes
// const uniqueSizes = [...new Set(products.flatMap(product => product.size))];

// res.send(uniqueSizes);

// CRUD getProducts
const getProducts: RequestHandler = async (req, res) => {
  const { category, size } = req.query;
  // console.log(req.query);
  console.log(req.query);

  let filter: any = {};

  if (category) {
    // filter.categories?.forEach((el) => ({ $in: category }));
    filter.categories = { $in: category };
  }

  if (size) {
    // filter.size?.forEach((element) => ({ $in: size }));
    filter.size = { $in: size };
  }

  try {
    const products = await productModel.find(filter).populate("categories", {
      categoryName: 1,
    });
    // .populate("review");
    // console.log(products[0]);

    res.send(products);
  } catch (error) {
    ("");
    res.status(400).json({ ErrorMessage: " Error happenned" });
  }
};
// CRUD
const getOneProduct: RequestHandler = async (req, res) => {
  // console.log("WHERE getOneProduct REQ.PARAMS", req.params);
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
    // console.log("WHERE IS CREATE PRODUCTs REQ.BODY", req.body);
    const {
      productName,
      price,
      image,
      size,
      description,
      averageRating,
      totalReview,
      categories,
      quantity,
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
      quantity: quantity,
    });

    res.send(product);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ ErrorMessage: " Error happenned to create PRODUCT" });
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
      quantity,
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
          quantity,
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
