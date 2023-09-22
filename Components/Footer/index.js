import React from "react";
import JildamLogo from "@/public/img/jildam.png";
import { TiSocialInstagram } from "react-icons/ti";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border dark:bg-[#222323] dark:text-white border-t-black/20 select-none pt-10 pb-4 grid grid-cols-2 justify-items-center justify-center">
      <Image
        src={JildamLogo}
        alt="Jildam-Logo"
        className="w-28 dark:invert transition-all ease-linear pointer-events-none"
      />
      <div className="h-full w-full flex flex-col justify-center items-center">
        <span className="mb-2">Comunicate con nosotros por nuestras redes</span>
        <a
          href="https://www.instagram.com/jildam.cs/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialInstagram className="text-4xl bg-zinc-700 text-white hover:bg-zinc-300 hover:text-gray-800 dark:hover:bg-zinc-700 dark:hover:text-white dark:bg-zinc-300 dark:text-gray-800  transition-all ease-linear rounded-full w-10 h-10 p-1" />
        </a>
      </div>
      <div className="col-span-2 flex flex-col mt-6 text-center">
        <span>Jildam 2021-2023</span>
        <Link
          href="/terms"
          className="text-blue-700 underline underline-offset-2 mt-1"
        >
          Terminos, condiciones y legales
        </Link>
      </div>
    </footer>
  );
}
