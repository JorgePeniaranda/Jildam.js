"use client";

import React from "react";
import { FiLogOut } from "react-icons/fi";
import JildamLogo from "@/public/img/jildam.png";
import SwitchTheme from "@/Components/SwitchTheme";
import Image from "next/image";
import Link from "next/link";
import buttonStyles from "@/styles/buttons.module.css";

export default function Navbar() {
  return (
    <nav className="w-full h-24 flex items-center z-50 bg-white dark:bg-[#222323] dark:text-white fixed top-0 justify-between select-none shadow-md">
      <figure className="flex h-full items-center pl-3 w-1/6">
        <Image
          src={JildamLogo}
          alt="Jildam-Logo"
          className="h-full w-20 p-4 pr-0 dark:invert ease-linear pointer-events-none"
        />
        <figcaption className="font-normal text-2xl">Jildam</figcaption>
      </figure>
      <ul className="flex w-4/6 gap-5 text-xl justify-around items-center">
        <Link href="/main" className={buttonStyles.linkedButton}>
          Inicio
        </Link>
        <Link href="/manage" className={buttonStyles.linkedButton}>
          Gestionar Contraseñas
        </Link>
        <Link href="/profile" className={buttonStyles.linkedButton}>
          Perfil
        </Link>
      </ul>
      <ul className="flex items-center text-4xl gap-6 pr-9 w-1/6 justify-end">
        <SwitchTheme />
        <Link href="/">
          <FiLogOut className="cursor-pointer hover:text-red-600 ease-linear transition-all" />
        </Link>
      </ul>
    </nav>
  );
}
