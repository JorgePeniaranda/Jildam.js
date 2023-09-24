/* Components */
import Link from "next/link";
import { ShowSecretPassword } from "../ShowSecretPassword";
import { FiEdit, FiX } from "react-icons/fi";

/* Styles */
import style from "./style.module.scss";

export const TableAccounts = ({ accounts }) => {
  return (
    <table className={style.TableAccounts}>
      <thead>
        <tr>
          <th>Web</th>
          <th>Usuario</th>
          <th>Contraseña</th>
          <th>Opciones</th>
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

        {accounts.map((account) => {
          return (
            <tr key={accounts.indexOf(account)}>
              <td>
                <Link href={account.web} target="_blank">
                  {account.web}
                </Link>
              </td>
              <td>{account.user}</td>
              <td>
                <ShowSecretPassword password={account.pass} />
              </td>
              <td>
                <ul>
                  <li>
                    <FiEdit name="edit" />
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
  );
};
