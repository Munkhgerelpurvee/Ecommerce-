import axios from "axios";

const URL = process.env.NEXT_PUBLIC_API;

export const api = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/json",
  },
});
