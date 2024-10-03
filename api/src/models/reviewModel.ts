import mongoose from "mongoose";
const { Schema, model } = mongoose;
const reviewSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },

  categories: {
    type: [Schema.Types.ObjectId],
    ref: "Category",
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  description: String,
  averageRating: Number,
  totalReview: Number,

  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
});
export const reviewModel = model("Review", reviewSchema, "products");
