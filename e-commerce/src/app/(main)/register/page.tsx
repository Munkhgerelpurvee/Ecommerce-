"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { Container } from "../../../components/Container";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Dot } from "lucide-react";
import { useFormik } from "formik";
import * as yup from "yup";

import { RequestHandler } from "express";
import { api } from "@/axios";

interface FormValues {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

function Register() {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  }
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },

    validationSchema: yup.object({
      name: yup.string().required("Нэр шаардлагатай"),
      email: yup
        .string()
        .email("Алдаатай Nмэйл")
        .required("Nмэйл шаардлагатай"),
      password: yup
        .string()
        .min(8, "Нууц үг 8 тэмдэгтээс дээш байх ёстой")
        .matches(/[A-Z]/, "Том үсэг орсон байх ёстой")
        .matches(/[a-z]/, "Жижиг үсэг орсон байх ёстой")
        .matches(/\d/, "Тоо орсон байх ёстой")
        .matches(/[\W_]/, "Тэмдэгт орсон байх ёстой")
        .required("Нууц үг шаардлагатай"),
      passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Нууц үг таарахгүй байна")
        .required("Нууц үг давтана уу"),
    }),

    onSubmit: (values) => {
      console.log("Form submitted", values);
      submit(values.name, values.email, values.password);
    },
  });
  // submit функц дарахад backEnd рүү явуулах
  const submit = async (name: string, email: string, password: string) => {
    console.log(name, email, password);

    try {
      const response = await api.post("/register", { name, email, password });
      console.log("Successfully registered", response.data.newUser);
    } catch (err) {
      console.log(err);
    }
  };

  //   formik цаанаасаа handleChange -ийг өгч байгаа.

  return (
    <>
      <Navbar />
      <Container>
        <div className="w-full h-full flex flex-col bg-gray-200 justify-center items-center">
          <form
            onSubmit={formik.handleSubmit}
            // onSubmit={submit}
            className="w-full h-full  flex  flex-col justify-center items-center"
          >
            <h1 className=" text-[#09090B] font-semibold text-[24px] mt-44 mb-10">
              Бүртгүүлэх
            </h1>
            <div className="w-[334px] h-[436px] flex flex-col justify-center items-center gap-y-5 bg-pink-200">
              <Input
                placeholder="Нэр"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-9"
                value={formik.values.name}
                name="name"
                onChange={formik.handleChange}
              />
              {formik.errors.name ? (
                <div className="text-sm text-red-500">{formik.errors.name}</div>
              ) : null}
              <Input
                type="email"
                placeholder="Имэйл хаяг"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-9"
                value={formik.values.email}
                name="email"
                onChange={formik.handleChange}
              />
              {formik.errors.email ? (
                <div className="text-sm text-red-500">
                  {formik.errors.email}
                </div>
              ) : null}
              <Input
                type="password"
                placeholder="Нууц үг"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-9"
                value={formik.values.password}
                name="password"
                onChange={formik.handleChange}
              />
              {formik.errors.password ? (
                <div className="text-sm text-red-500">
                  {formik.errors.password}
                </div>
              ) : null}
              <Input
                type="password"
                placeholder="Нууц үг давтах"
                className="bg-[#F3F4F6] rounded-[8px] border-2 border-[#D1D5DB] h-9"
                value={formik.values.passwordConfirm}
                name="passwordConfirm"
                onChange={formik.handleChange}
              />
              {formik.errors.passwordConfirm ? (
                <div className="text-sm text-red-500">
                  {formik.errors.passwordConfirm}
                </div>
              ) : null}
              <ul className="text-[#71717A] font-normal text-xs ">
                <li className="flex items-center ">
                  <Dot />
                  Том үсэг орсон байх
                </li>
                <li className="flex items-center">
                  <Dot />
                  Жижиг үсэг орсон байх
                </li>
                <li className="flex items-center">
                  <Dot />
                  Тоо орсон байх
                </li>
                <li className="flex items-center">
                  <Dot />
                  Тэмдэгт орсон байх
                </li>
              </ul>

              <Button
                variant="outline"
                className="w-full rounded-2xl bg-[#0166FF] text-sm font-normal text-white"
                type="submit"
                onClick={() => formik.handleChange}
              >
                Үүсгэх
              </Button>
            </div>
          </form>
          <div className="w-[334px] h-fill flex justify-center items-center bg-green-200 mb-36">
            <Button
              variant="outline"
              className="w-full rounded-2xl bg-[#fff]"
              type="submit"
              onClick={() => formik.handleChange}
            >
              <h3 className="text-sm font-normal text-[#2563EB] ">Нэвтрэх</h3>
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
