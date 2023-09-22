/* Packages */
import Link from "next/link";
import Image from "next/image";

/* Components */
import SwitchTheme from "@/Components/SwitchTheme";
import buttonStyles from "@/styles/buttons.module.css";
import { FiLogOut } from "react-icons/fi";

/* Assets */
import JildamLogo from "@/public/img/jildam.png";

/* Styles */
import style from "./style.module.scss";

export default function Navbar() {
  return (
    <nav className={style.navbar}>
      <figure>
        <Image src={JildamLogo} alt="Jildam-Logo" />
        <figcaption>Jildam</figcaption>
      </figure>
      <ul id="links">
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
}
