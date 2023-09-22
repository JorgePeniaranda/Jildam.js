"use client";

import React from "react";
import { FiLogOut } from "react-icons/fi";
import NavButton from "./Components/Navbar-Buttons";
import JildamLogo from "../../Media/img/jildam.png";
import SwitchTheme from "./Components/SwitchTheme";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full h-24 flex items-center z-50 bg-white dark:bg-[#222323] dark:text-white fixed top-0 justify-between select-none shadow-md">
      <ul className="flex h-full items-center pl-3 w-1/5">
        <Image
          src={JildamLogo}
          alt="Jildam-Logo"
          className="h-full p-4 pr-0 dark:invert transition-all ease-linear pointer-events-none"
        />
        <h1 className="font-normal text-2xl">Jildam</h1>
      </ul>
      <ul className="flex w-4/5 gap-5 text-xl justify-around">
        <NavButton to="/main">Inicio</NavButton>
        <NavButton to="/manage">Gestionar Contraseñas</NavButton>
        <NavButton to="/profile">Perfil</NavButton>
      </ul>
      <ul className="flex items-center text-4xl gap-6 pr-9 w-1/5 justify-end">
        <SwitchTheme />
        <Link href="/">
          <FiLogOut className="cursor-pointer hover:text-red-600 ease-linear transition-all" />
        </Link>
      </ul>
    </nav>
  );
}
