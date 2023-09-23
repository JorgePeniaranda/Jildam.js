/* Components */
import Link from "next/link";
import Image from "next/image";
import { SwitchTheme } from "@/Components";
import { FiLogOut } from "react-icons/fi";

/* Assets */
import JildamLogo from "@/public/img/jildam.png";

/* Styles */
import style from "./style.module.scss";

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <figure>
        <Image src={JildamLogo} alt="Jildam-Logo" />
        <figcaption>Jildam</figcaption>
      </figure>
      <ul id="links">
        <Link href="/main">Inicio</Link>
        <Link href="/manage">Gestionar Contraseñas</Link>
        <Link href="/profile">Perfil</Link>
      </ul>
      <ul id="options">
        <li>
          <SwitchTheme />
        </li>
        <li>
          <Link href="/">
            <FiLogOut />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
