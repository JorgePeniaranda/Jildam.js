"use client";

/* Functions */
// import { UserContext } from "@/Contexts/userContext";
import { useState } from "react";

/* Components */
import Link from "next/link";
import { Container, SearchBar, ShowSecretPassword } from "@/Components";
import { FiEdit, FiX } from "react-icons/fi";

/* Styles */
import style from "./style.module.scss";

/* Utils */
import { Account } from "@/Utils/Account";
import { Modal } from "@/Components/Modal";

const Accounts = [
  new Account(1, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(2, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(3, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(4, "https://xdmoment.netlify.app/", "lol", "12345678"),
  new Account(5, "https://xdmoment.netlify.app/", "lol", "12345678"),
];

interface IAccount {
  /* Pasar a carpeta tipos */ id: number;
  web: string;
  userName: string;
  password: string;
}

export default function Manage() {
  const [showEditModal, setShowEditModal] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  // const { userList } = React.useContext(UserContext);

  const onClickEdit = () => {
    setShowEditModal(true);
  };

  const onClickAdd = () => {
    setShowAddModal(true);
  };

  return (
    <Container className={style.manageContainer}>
      <section>
        <h1>Gestionar Contraseñas</h1>
        <SearchBar />
        <table id="tableAccounts" className={style.TableAccounts}>
          <thead>
            <tr>
              <th>Web</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {(Accounts as Account[]).map((account) => {
              return (
                <tr key={Accounts.indexOf(account)}>
                  <td>
                    <Link href={account.web} target="_blank">
                      {account.web}
                    </Link>
                  </td>
                  <td>{account.userName}</td>
                  <td>
                    <ShowSecretPassword password={account.password} />
                  </td>
                  <td>
                    <ul>
                      <li>
                        <FiEdit name="edit" onClick={() => onClickEdit()} />
                      </li>
                      <li>
                        <FiX name="remove" />
                      </li>
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <div id="fixed">
        <button id="addButton" onClick={() => onClickAdd()}>
          +
        </button>
        <Modal
          show={showEditModal}
          setShow={setShowEditModal}
          title="Editar cuenta"
          id="edit"
        >
          <form>
            <input />
            <input />
            <input />
          </form>
        </Modal>
        <Modal
          show={showAddModal}
          setShow={setShowAddModal}
          title="Agregar cuenta"
          id="add"
        />
      </div>
    </Container>
  );
}
