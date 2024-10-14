import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  productCode: {
    type: Number,
    required: true,
  },

  categories: {
    type: [Schema.Types.ObjectId],
    ref: "Category",
    required: false,
  },
  review: {
    type: Schema.Types.ObjectId,
    ref: "Review",
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  image: {
    type: [String],
    required: false,
  },
  size: {
    type: [String],
    required: false,
  },

  description: String,
  averageRating: Number,
  totalReview: Number,

  createdAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: false,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: false,
    default: 0,
  },
});
export const productModel = model("Product", productSchema);
