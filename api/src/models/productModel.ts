import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },

  categories: {
    type: [Schema.Types.ObjectId],
    ref: "Category",
    required: true,
  },
  review: {
    type: Schema.Types.ObjectId,
    ref: "Review",
    // required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  size: {
    type: [String],
    required: true,
  },

  description: String,
  averageRating: Number,
  totalReview: Number,

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});
export const productModel = model("Product", productSchema);
