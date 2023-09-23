import React from "react";
import { Container } from "@/Components";
import AsideProfileButton from "./Components/AsideProfileButton";
import Image from "next/image";

export default function Profile({ children }) {
  return (
    <Container className="grid grid-cols-[25%_75%]">
      <aside className="bg-zinc-300/60 flex flex-col items-center select-none">
        <Image
          src=""
          className="w-52 h-52 bg-red-600 mt-20 mb-10 rounded-full"
          alt="Profile"
        />
        <AsideProfileButton
          to="/profile/personalization"
          className="mb-10"
          text="Personalizar"
        />
        <AsideProfileButton
          to="/profile/security"
          text="Privacidad y Seguridad"
        />
      </aside>
      {children}
    </Container>
  );
}
