"use client";
import Link from "next/link";
import Image from "next/image";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Container } from "../components/Container";

// import { useAuth } from "../../../components/providers/AuthProvider";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const { login } = useAuth();
  return (
    <>
      <Navbar />
      <Container>
        <div className="w-full h-full flex flex-col  bg-gray-200 justify-center items-center">
          <div className="w-full h-full  flex justify-center items-center ">
            <div className="w-[384px] h-[426px] flex flex-col justify-center items-center gap-y-10">
              <div className="w-full flex flex-col justify-center items-center gap-y-2 mt-16 ">
                <h4 className="font-semibold text-[24px]">Нэвтрэх</h4>
              </div>
              <div className="w-full flex flex-col justify-center items-center gap-y-4">
                <Input
                  type="email"
                  placeholder="Имэйл хаяг"
                  className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-9"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Input
                  type="password"
                  placeholder="Нууц үг"
                  className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-9"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <Button
                  variant="outline"
                  className="w-full rounded-2xl bg-[#0166FF]"
                  // onClick={() => login(email, password)}
                >
                  <h3 className="text-sm font-medium text-white">Нэвтрэх</h3>
                </Button>
                <Link href="/forgetPass">
                  <h6 className="text-sm font-normal text-[#71717A]">
                    Нууц үг мартсан
                  </h6>
                  <div className="border-b-2 border-[#71717A] mb-12"></div>
                </Link>
                <Link href="/register" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full rounded-2xl bg-[#0166FF]"
                    // onClick={() => login(email, password)}
                  >
                    <h3 className="text-sm font-medium text-white">
                      Бүртгүүлэх
                    </h3>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
