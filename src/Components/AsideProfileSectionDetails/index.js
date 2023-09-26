/* Components */
import Image from "next/image";

/* Styles */
import style from "./style.module.scss";

export const AsideProfileSectionDetails = (pfpPicture, onClickChangePfp) => {
  return (
    <div className={style.AsideProfileSectionDetails} id="profile">
      <Image
        src="/img/default-pfp.png"
        width={150}
        height={150}
        className="profileImg"
        alt="ProfileIMG"
      />
      <button>Cambiar</button>
      <ul>
        <li>Usuario</li>
        <li>Nombre Apellido</li>
      </ul>
    </div>
  );
};
