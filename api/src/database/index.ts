import { connect } from "mongoose";
export const connectToDatabase = async () => {
  await connect(
    "mongodb+srv://Munkhgerel:Fa5024@cluster0.sog5l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Connected to database successfully");
};
