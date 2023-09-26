/* Components */
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";

/* Styles */
import style from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <Image src="/img/jildam.png" width={120} height={200} alt="Jildam-Logo" />
      <div id="socialMediaLinks">
        <span>Comunicate con nosotros por nuestras redes</span>
        <Link href="https://www.instagram.com/jildam.cs/" target="_blank">
          <TiSocialInstagram />
        </Link>
      </div>
      <div id="terms">
        <span>Jildam 2021-2023</span>
        <Link href="/terms">Terminos, condiciones y legales</Link>
      </div>
    </footer>
  );
};
