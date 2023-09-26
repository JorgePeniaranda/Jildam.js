/* Functions */
// import { UserContext } from "@/Contexts/userContext";

/* Components */
import { Container } from "@/Components";
import Link from "next/link";

/* Styles */
import style from "./style.module.scss";

export default function Main() {
  // const { userList, tokenSession } = React.useContext(UserContext);
  return (
    <Container className={style.mainContainer}>
      <h1>Bienvenido, pepe {/* {userList[tokenSession].user} */}</h1>
      <nav>
        <Link href="/manage">Gestionar Contraseñas</Link>
        <Link href="/profile">Perfil</Link>
      </nav>
    </Container>
  );
}
