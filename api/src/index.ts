import express from "express";
import cors from "cors";

const app = express();

app.options("*", cors());
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({ message: "HELLO WORLD TYPESCRIPT" });
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
