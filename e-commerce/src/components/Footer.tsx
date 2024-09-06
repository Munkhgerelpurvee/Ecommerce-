import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <div>
      <main className="w-full grid py-16 px-48 border bg-black ">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Link href="/Log-in">
              <Image
                src="/images/Vector.png"
                alt="Vecvor Logo"
                className="dark:invert"
                width={27}
                height={27}
              />
            </Link>
          </div>

          <div className="flex gap-4 justify-center items-center ">
            <div className=" border border-white w-10 h-10 rounded-full flex justify-center items-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div className="text-white text-sm font-normal">
              (976) 7007-1234
            </div>

            <div className=" border border-white w-10 h-10 rounded-full flex justify-center items-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <Link href="/dashboard">
              <Link href="#">
                <div className=" text-[#fff] text-sm font-normal ">
                  contact@ecommerce.mn
                </div>
              </Link>
            </Link>
          </div>
        </div>
        <div className="border-t-2 border-white my-6">border</div>
        <div className="flex justify-between">
          <div className="text-white text-sm font-normal ">
            © 2024 Ecommerce MN
          </div>
          <div className="text-white flex gap-2">
            <Facebook className="w-5 h-5" />
            <Instagram className="w-5 h-5" />
            <Twitter className="w-5 h-5" />
            <Linkedin className="w-5 h-5" />
          </div>
        </div>
      </main>
    </div>
  );
};
