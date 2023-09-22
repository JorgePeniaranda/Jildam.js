import React from "react";
import Container from "../../Components/Container";
import ButtonSession from "./Components/ButtonSession";

export default function Home() {
  return (
    <Container className="flex align-middle justify-center">
      <div className="w-2/3 relative shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] my-14 px-6">
        <h1 className="text-5xl font-semibold text-center">¡Bienvenido/a!</h1>
        <p className="text-center text-xl mt-8">
          ¡Hola! Somos un gestor de contraseñas de código abierto, eso significa
          que cualquier persona puede encontrar y solucionar errores, aumentando
          la eficacia del sistema. Sumado a eso, contamos con un apartado de
          {'"Perfil"'} donde podrás modificar tu perfil a tu gusto, cambiando la
          imagen, el nombre y el usuario. ¿Qué esperas para ingresar?
        </p>
        <div className="w-full grid grid-cols-2 justify-center justify-items-center mt-16">
          <ButtonSession
            text="Puede ingresar a su cuenta"
            to="/login"
            toText="Ingresar"
          />
          <ButtonSession
            text="Puede crear una cuenta"
            to="/register"
            toText="Registrarse"
          />
        </div>
      </div>
    </Container>
  );
}
