export const TableAccounts = ({ acounts }) => {
  return (
    <table className="table-fixed w-3/4">
      <thead>
        <tr className="w-full">
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
        <td
          web={"account.web"}
          user={"account.user"}
          pass={
            "account.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.passaccount.pass"
          }
        />
      </tbody>
    </table>
  );
};
