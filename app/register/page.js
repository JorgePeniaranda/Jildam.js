"use client";

import { useState } from "react";
// import { UserContext } from "../../Contexts/userContext";
import Container from "../../Components/Container";
import ContainerSessionForm from "../../Components/ContainerSessionForm";
import InputSessionForm from "../../Components/InputSessionForm";
import listError from "../../Utils/listError.json";
import Link from "next/link";

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
    <Container className="flex flex-col justify-center items-center h-max">
      <ContainerSessionForm className="my-8">
        <h1 className="select-none text-5xl font-semibold items-end flex h-1/6 mt-7 mb-12">
          Regístrate
        </h1>
        <form
          className="flex flex-col h-3/6 items-center justify-center w-full gap-7"
          onSubmit={(e) => onSubmit(e)}
        >
          <InputSessionForm
            type="text"
            value={registerForm.email}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, email: e.target.value })
            }
            placeholder="E-Mail..."
          />
          <InputSessionForm
            type="text"
            value={registerForm.user}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, user: e.target.value })
            }
            placeholder="Usuario..."
          />
          <InputSessionForm
            type="password"
            value={registerForm.pass}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, pass: e.target.value })
            }
            placeholder="Contraseña..."
          />
          <InputSessionForm
            type="password"
            value={registerForm.confirmPass}
            onChange={(e) =>
              setRegiterForm({ ...registerForm, confirmPass: e.target.value })
            }
            placeholder="Confirmé Contraseña..."
          />
          <div className="flex items-center justify-start gap-1 mt-1 select-none">
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
              <Link
                href="/terms"
                target="_blank"
                className="text-blue-600 hover:text-blue-400 underline underline-offset-2"
              >
                Terminos y Condiciones
              </Link>
            </label>
          </div>
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-400 underline underline-offset-2 mt-1 select-none"
          >
            ¿Tienes una cuenta? ¡Inicia sesión!
          </Link>
          <button
            type="submit"
            className="select-none text-white bg-blue-600 hover:bg-blue-500 transition-all ease-linear font-medium text-xl py-3 px-5 rounded-lg mt-9 mb-5"
          >
            Registrarse
          </button>
        </form>
      </ContainerSessionForm>
    </Container>
  );
}
