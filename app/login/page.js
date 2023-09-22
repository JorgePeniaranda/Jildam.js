"use client";

/* Packages */
import { useState } from "react";
// import { UserContext } from "@/Contexts/userContext";
import Link from "next/link";

/* Components */
import Container from "@/Components/Container";
import InputSessionForm from "@/Components/InputSessionForm";

/* Styles */
import style from "./style.module.scss";

/* Utils */
import listError from "@/Utils/listError.json";

export default function Login() {
  // const { loginForm, setLoginForm, login } = React.useContext(UserContext);

  const [loginForm, setLoginForm] = useState({
    auth: "adsf",
    pass: "adsf",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    let response = login();
    console.log(response ? listError[response] : "OK");
  };
  return (
    <Container className="flex justify-center items-center h-full">
      <section>
        <h1 className="select-none text-5xl font-semibold items-end flex h-1/6">
          Loguearte
        </h1>
        <form
          className="flex flex-col h-5/6 items-center justify-center w-full gap-7"
          onSubmit={(e) => onSubmit(e)}
        >
          <InputSessionForm
            type="text"
            value={loginForm.auth}
            onChange={(e) => {
              setLoginForm({ ...loginForm, auth: e.target.value });
            }}
            placeholder="E-Mail..."
          />
          <InputSessionForm
            type="password"
            value={loginForm.pass}
            onChange={(e) => {
              setLoginForm({ ...loginForm, pass: e.target.value });
            }}
            placeholder="Contraseña..."
          />
          <Link
            href="/register"
            className="select-none text-blue-600 hover:text-blue-400 underline underline-offset-2"
          >
            ¿No tienes una cuenta? ¡Regístrate!
          </Link>
          <button
            type="submit"
            className="select-none text-white bg-blue-600 hover:bg-blue-500 transition-all ease-linear font-medium text-xl py-3 px-5 rounded-lg"
          >
            Iniciar Sesión
          </button>
        </form>
      </section>
    </Container>
  );
}
