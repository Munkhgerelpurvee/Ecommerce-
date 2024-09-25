"use client";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import { ChangeEvent, useActionState, useState } from "react";
import { api } from "@/axios";
import { Loader } from "lucide-react";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files) {
      setImage(files[0]);
    }
  };
  console.log("SELECTED IMAGE FROM uploader : ", image);

  const handleUpload = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("image", image);

    try {
      setLoading(true);
      const response = await api.post("/register", { formData });
      //   const data = await response.json();
      //   console.log("uploaded: ", data);
      setLoading(false);
    } catch (error) {
      console.log("ERROR UPLOADING FILE:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="border p-8 rounded-2xl max-w-sm full w-full text-center flex flex-col gap-5">
        <h2 className="text-[24px] font-semibold mb-3">IMAGE UPLOADER</h2>
        <input type="file" onChange={handleFileChange} />
        <Button onClick={handleUpload}>
          {loading ? (
            // <Image src="/spinner.svg" width={40} height={40} alt="spinner" />
            <Loader />
          ) : (
            "Upload"
          )}
        </Button>
      </div>
    </div>
  );
};

export default Page;
