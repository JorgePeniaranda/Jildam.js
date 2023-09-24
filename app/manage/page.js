/* Functions */
// import { UserContext } from "@/Contexts/userContext";

/* Components */
import { Container, SearchBar, TableAccounts } from "@/Components";

/* Styles */
import style from "./style.module.scss";

/* Utils */
import { Account } from "@/Utils/Account";

const accounts = [
  new Account(1, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(2, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(3, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(4, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(5, "https://xdmoment.netlify.app/", "lol", "12345678"),
];

export default function Manage() {
  // const { userList } = React.useContext(UserContext);

  return (
    <Container className={style.manageContainer}>
      <section>
        <h1>Gestionar Contraseñas</h1>
        <SearchBar />
        <TableAccounts accounts={accounts} />
        <button id="addButton">+</button>
      </section>
    </Container>
  );
}
