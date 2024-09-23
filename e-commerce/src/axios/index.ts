import axios from "axios";

// const URL = "http://localhost:5001";
const URL = process.env.NEXT_PUBLIC_API;

console.log(URL, "===");

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
