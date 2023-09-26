/* Components */
import {
  Container,
  AsideProfileSection,
  AsideProfileSectionDetails,
} from "@/Components";

/* Styles */
import style from "./style.module.scss";

export default function SecurityProfile() {
  return (
    <Container className={style.securityProfileSection}>
      <AsideProfileSection />
      <AsideProfileSectionDetails />
      <ul id="options">
        <li>
          <h2>Cambiar contraseña</h2>
          <button>Cambiar contraseña</button>
        </li>

        <li>
          <h2>Eliminar cuenta</h2>
          <button>Eliminar cuenta</button>
        </li>

        <li>
          <h2>Borrar contraseñas</h2>
          <button>Resetear contraseñas</button>
        </li>
      </ul>
    </Container>
  );
}

/* 

  <h3 className='text-3xl font-semibold mb-1'>{children}</h3>
  <button className='bg-red-600 hover:bg-red-500 w-1/4 py-2 text-white rounded-lg text-lg font-medium'>{children}</button>

*/
