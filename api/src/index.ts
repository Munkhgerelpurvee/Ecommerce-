import express from "express";
const app = express();
app.get("/", (_req, res) => {
  res.json({ message: "HELLO WORLD TYPESCRIPT" });
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
