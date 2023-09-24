/* Components */
import { AsideProfileSectionDetails } from "@/Components";

/* Styles */
import style from "./style.module.scss";

const PersonalizationProfile = () => {
  return (
    <section className={style.personalizationProfileSection}>
      <AsideProfileSectionDetails />
      <form>
        <div>
          <label htmlFor="username">Usuario</label>
          <input type="text" id="username" readOnly={true} disabled={true} />
        </div>

        <div>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" required={true} />
        </div>

        <div>
          <label htmlFor="lastName">Apellido</label>
          <input type="text" id="lastName" required={true} />
        </div>

        <div>
          <label htmlFor="bio">Biografía</label>
          <textarea type="text" id="bio" required={true} />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </section>
  );
};

export default PersonalizationProfile;

/* 


          <textarea
            className={InputClassName + " resize-y"}
            type={type}
            id={name}
            required={required}
            readOnly={readOnly}
            disabled={disabled}
          />
          
          
          */
