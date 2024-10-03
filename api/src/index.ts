import express from "express";
import cors from "cors";
import { connectToDatabase } from "./database";
import { userModel } from "./models/UserModel";
import { reviewModel } from "./models/reviewModel";

import { userRouter } from "./routers/user.router";
import { categoryRouter } from "./routers/category.router";
import { productRouter } from "./routers/product.router";
import { authRouter } from "./routers/Auth.router";
import { uploadRouter } from "./routers/upload.router";
import { reviewRouter } from "./routers/review.router";

connectToDatabase();
const app = express();

app.options("*", cors());
app.use(cors());
app.use(express.json());

// CRUD Routers
app.use(userRouter);
app.use(categoryRouter);
app.use(productRouter);
app.use(authRouter);
app.use(uploadRouter);
app.use(reviewRouter);

app.get("/list", async (req, res) => {
  const { page } = req.query;
  const pageNumber = Number(page);
  const pageSize = 5;

  const startDate = "2024-09-20T04:09:44.764Z";
  const endDate = "2024-09-30T04:09:44.764Z";

  const list = await reviewModel.find(
    {
      // $or: [
      //   {
      //     productName: { $regex: "Tee", $options: "i" },
      //   },
      //   {
      //     description: { $regex: "Tee", $options: "i" },
      //   },
      // ],
      // createdAt: { $gt: "2024-09-28T04:09:44.764Z" },
      // createdAt: {
      //   $gt: startDate,
      //   $lt: endDate,
      // },
      $or: [
        {
          price: {
            $gt: 100,
            $lt: 5000,
          },
        },
        {
          price: {
            $gt: 6000,
            $lt: 15000,
          },
        },
      ],
    },

    "_id price quantity description averageRating totalReview categories productName createdAt updatedAt",
    { limit: pageSize, skip: (pageNumber - 1) * pageSize, sort: "-price" }
  );

  res.json(list);
});

// app.get("/list", async (_req, res) => {
//   const list = await reviewModel.find(
//     {
//       category: { $regex: "бараа", $options: "i" },
//     },
//     "price quantity description averageRating totalReview categories  productName",
//     { limit: 8, sort: "-price" }
//   );

//   res.json(list);
// });

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
