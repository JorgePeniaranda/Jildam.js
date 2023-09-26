"use client";

/* this breaks the other pages  */

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

export default function Register() {
  // const { registerForm, setRegiterForm, addNewUser } =
  //   React.useContext(UserContext);

  const [registerForm, setRegiterForm] = useState({
    email: "adsf",
    user: "adsf",
    pass: "adsf",
    confirmPass: "adsf",
    acceptTerms: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    let response = addNewUser();
    console.log(response ? listError[response] : "OK");
  };

  return (
    <Container className={style.registerContainer}>
      <section>
        <h1>Regístrate</h1>
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="text"
            value={registerForm.email}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, email: e.target.value })
            }
            placeholder="E-Mail..."
          />
          <input
            type="text"
            value={registerForm.user}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, user: e.target.value })
            }
            placeholder="Usuario..."
          />
          <input
            type="password"
            value={registerForm.pass}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, pass: e.target.value })
            }
            placeholder="Contraseña..."
          />
          <input
            type="password"
            value={registerForm.confirmPass}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, confirmPass: e.target.value })
            }
            placeholder="Confirmé Contraseña..."
          />
          <div id="checkBox">
            <input
              type="checkbox"
              id="termsCheckbox"
              checked={registerForm.acceptTerms}
              onChange={(e) =>
                setRegiterForm({
                  ...registerForm,
                  acceptTerms: e.target.checked,
                })
              }
            />
            <label htmlFor="termsCheckbox">
              Acepto los{" "}
              <Link href="/terms" target="_blank">
                Terminos y Condiciones
              </Link>
            </label>
          </div>
          <Link href="/login">¿Tienes una cuenta? ¡Inicia sesión!</Link>
          <button type="submit">Registrarse</button>
        </form>
      </section>
    </Container>
  );
}
