"use client";
import { api } from "../../../../axios/index";
import { useState, createContext, useEffect, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

// эхлээд user-ийн мэдээлэл хадгалах context үүсгэнэ
const authPaths = ["/Login", "/register"];
// export const AuthContext = createContext();
// AuthContext- iig Provider hiih component hiine
