"use client";

/* Functions */
import { useState } from "react";
// import { UserContext } from "@/Contexts/userContext";

/* Components */
import Link from "next/link";
import { Container } from "@/Components";

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
    <Container className={style.loginContainer}>
      <section>
        <h1>Loguearte</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            value={loginForm.auth}
            onChange={(e) => {
              setLoginForm({ ...loginForm, auth: e.target.value });
            }}
            placeholder="E-Mail..."
          />
          <input
            type="password"
            value={loginForm.pass}
            onChange={(e) => {
              setLoginForm({ ...loginForm, pass: e.target.value });
            }}
            placeholder="Contraseña..."
          />
          <Link href="/register">¿No tienes una cuenta? ¡Regístrate!</Link>
          <button type="submit">Iniciar Sesión</button>
        </form>
      </section>
    </Container>
  );
}
