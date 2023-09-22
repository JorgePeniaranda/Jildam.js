/* Packages */
import Link from "next/link";

/* Components */
import Container from "@/Components/Container";

/* Styles */
import styles from "./style.module.scss";
import buttonsStyle from "@/styles/buttons.module.css";

export default function Home() {
  return (
    <Container className={styles.home}>
      <section>
        <article>
          <h1>¡Bienvenido/a!</h1>
          <p>
            ¡Hola! Somos un gestor de contraseñas de código abierto, eso
            significa que cualquier persona puede encontrar y solucionar
            errores, aumentando la eficacia del sistema. Sumado a eso, contamos
            con un apartado de
            {'"Perfil"'} donde podrás modificar tu perfil a tu gusto, cambiando
            la imagen, el nombre y el usuario. ¿Qué esperas para ingresar?
          </p>
        </article>
        <ul>
          <li>
            <span>Ingresar a su cuenta</span>
            <Link href="/login" className={buttonsStyle.button_md}>
              Ingresar
            </Link>
          </li>
          <li>
            <span>Crear una cuenta</span>
            <Link href="/register" className={buttonsStyle.button_md}>
              Registrarse
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}
