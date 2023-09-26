/* Components */
import Image from "next/image";
import Link from "next/link";

/* Styles */
import style from "./style.module.scss";

export const AsideProfileSection = () => {
  return (
    <aside className={style.asideProfile}>
      <Image
        src="/img/default-pfp.png"
        width={150}
        height={150}
        className="profileImg"
        alt="ProfileIMG"
      />
      <Link href="/profile/personalization">Personalizar</Link>
      <Link href="/profile/security">Privacidad y Seguridad</Link>
    </aside>
  );
};
