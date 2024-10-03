import { RequestHandler } from "express";
import { reviewModel } from "../../models/reviewModel";

export const getReview: RequestHandler = async (req, res) => {
  const { page } = req.query;
  const pageNumber = Number(page);
  const pageSize = 5;

  const startDate = "2024-09-20T04:09:44.764Z";
  const endDate = "2024-10-30T04:09:44.764Z";
  try {
    const list = await reviewModel.find(
      {
        // productName: { $regex: "цамц", $options: "i" },
        $or: [
          {
            productName: { $regex: "цамц", $options: "i" },
          },
          {
            productName: { $regex: "сав", $options: "i" },
          },
          {
            productName: { $regex: "Цахилгаан", $options: "i" },
          },
        ],
        createdAt: {
          $gt: startDate,
          $lt: endDate,
        },
        // $or: [
        //   {
        //     price: {
        //       $gt: 1000,
        //       $lt: 5000,
        //     },
        //   },
        //   {
        //     price: {
        //       $gt: 6000,
        //       $lt: 15000,
        //     },
        //   },
        // ],
      },
      "_id price quantity description averageRating totalReview categories productName createdAt updatedAt",
      //   { limit: pageSize, skip: (pageNumber - 1) * pageSize, sort: "-price" }
      { limit: 10, sort: "-price" }
    );
    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(400).json({ ErrorMessage: " Error happenned to get REVIEW" });
  }
};
