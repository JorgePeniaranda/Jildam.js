/* Components */
import { AsideProfileSectionDetails } from "@/Components";

/* Styles */
import style from "./style.module.scss";

export default function SecurityProfile({ className }) {
  return (
    <section className={style.securityProfileSection}>
      <AsideProfileSectionDetails />
      <ul id="options">
        <li>
          <h2 htmlFor="changePassword">Cambiar contraseña</h2>
          <button id="changePassword">Cambiar contraseña</button>
        </li>

        <li>
          <h2 htmlFor="deleteUser">Eliminar cuenta</h2>
          <button id="deleteUser">Eliminar cuenta</button>
        </li>

        <li>
          <h2>Borrar contraseñas</h2>
          <button id="resetPassword">Resetear contraseñas</button>
        </li>
      </ul>
    </section>
  );
}

/* 

  <h3 className='text-3xl font-semibold mb-1'>{children}</h3>
  <button className='bg-red-600 hover:bg-red-500 w-1/4 py-2 text-white rounded-lg text-lg font-medium'>{children}</button>

*/
