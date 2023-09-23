"use client";

/* Functions */
// import { UserContext } from "@/Contexts/userContext";

/* Components */
import { Container, SearchBar } from "@/Components";
import UserRow from "./Components/UserRow";
import TopRow from "./Components/TopRow";

/* Styles */
import style from "./style.module.scss";

export default function Manage() {
  // const { userList } = React.useContext(UserContext);

  return (
    <Container className={style.manageContainer}>
      <section>
        <h1>Gestionar Contraseñas</h1>
        <SearchBar />
        <table className="table-fixed w-3/4">
          <thead>
            <tr className="w-full">
              <TopRow>Web</TopRow>
              <TopRow>Usuario</TopRow>
              <TopRow>Contraseña</TopRow>
              <TopRow>Opciones</TopRow>
            </tr>
          </thead>
          <tbody>
            {/* {userList[0].accounts.map((account) => {
              return (
                <UserRow
                  key={userList[0].accounts.indexOf(account)}
                  web={account.web}
                  user={account.user}
                  pass={account.pass}
                />
              );
            })} */}
            <UserRow
              web={"account.web"}
              user={"account.user"}
              pass={
                "account.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.pass"
              }
            />
          </tbody>
        </table>
        <button className="bg-blue-600 text-white font-bold w-12 h-12 fixed bottom-4 right-4 text-3xl pb-1 rounded-full hover:bg-blue-500 transition-all ease-linear">
          +
        </button>
      </section>
    </Container>
  );
}
