import Link from "next/link";
import Container from "@/Components/Container";

import styles from "./style.module.css";
import buttonsStyle from "@/styles/buttons.module.css";

export default function Home() {
  return (
    <Container className="flex items-center justify-center">
      <div className="w-2/3 h-3/4 p-10 shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px]">
        <h1 className="h-1/6 text-5xl font-semibold flex justify-center items-end">
          ¡Bienvenido/a!
        </h1>
        <p className="h-3/6 text-center text-xl mt-8">
          ¡Hola! Somos un gestor de contraseñas de código abierto, eso significa
          que cualquier persona puede encontrar y solucionar errores, aumentando
          la eficacia del sistema. Sumado a eso, contamos con un apartado de
          {'"Perfil"'} donde podrás modificar tu perfil a tu gusto, cambiando la
          imagen, el nombre y el usuario. ¿Qué esperas para ingresar?
        </p>
        <ul className={"h-2/6 " + styles.sessionLinksContainer}>
          <li className="flex flex-col justify-center items-center">
            <span>Ingresar a su cuenta</span>
            <Link href="/login" className={buttonsStyle.button_md}>
              Ingresar
            </Link>
          </li>
          <li className="flex flex-col justify-center items-center">
            <span>Crear una cuenta</span>
            <Link href="/register" className={buttonsStyle.button_md}>
              Registrarse
            </Link>
          </li>
        </ul>
      </div>
    </Container>
  );
}
