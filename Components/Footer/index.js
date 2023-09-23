/* Components */
import Link from "next/link";
import Image from "next/image";
import { TiSocialInstagram } from "react-icons/ti";

/* Styles */
import style from "./style.module.scss";

/* Assets */
import JildamLogo from "@/public/img/jildam.png";

export const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <Image src={JildamLogo} alt="Jildam-Logo" />
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
