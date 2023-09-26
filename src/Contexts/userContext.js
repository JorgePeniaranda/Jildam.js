"use client";

import { createContext, useState } from "react";
import { useLocalStorage } from "@/Hooks/useLocalStorage";
import { User } from "@/Utils/User";
import { Account } from "@/Utils/Account";
import { CheckRegister, CheckLogin } from "@/Utils/formCheck";

const UserContext = createContext();

const listaTempUsers = [
  new User(1, "email@email.com", "user", "name", "lastName", "bio", "photo", [
    new Account(1, "https://xdmoment.netlify.app/", "lol", "12345678"),
    new Account(2, "https://xdmoment.netlify.app/", "lol", "12345678"),
    new Account(3, "https://xdmoment.netlify.app/", "lol", "12345678"),
    new Account(4, "https://xdmoment.netlify.app/", "lol", "12345678"),
    new Account(5, "https://xdmoment.netlify.app/", "lol", "12345678"),
  ]),
];

const UserProvider = ({ children }) => {
  /* -------------------- ListUser -------------------- */
  const [userList, setUserList] = useLocalStorage(
    "JildamUsers",
    listaTempUsers
  );

  /* -------------------- RegisterForm -------------------- */
  const [registerForm, setRegiterForm] = useState({
    email: "",
    user: "",
    pass: "",
    confirmPass: "",
    acceptTerms: false,
  });

  const addNewUser = () => {
    return (
      CheckRegister(registerForm, userList) ||
      setUserList([
        ...userList,
        new User(
          userList.length,
          registerForm.email,
          registerForm.user,
          registerForm.pass
        ),
      ])
    );
  };

  /* -------------------- LoginForm -------------------- */
  const [loginForm, setLoginForm] = useState({
    auth: "",
    pass: "",
  });
  const [tokenSession, setTokenSession] = useState(undefined);

  const login = () => {
    const resultLogin = CheckLogin(loginForm, userList);

    if (!isNaN(resultLogin)) {
      setTokenSession(resultLogin);
      console.log(tokenSession);
    } else return resultLogin;
  };

  return (
    <UserContext.Provider
      value={{
        userList,
        setUserList,
        registerForm,
        setRegiterForm,
        addNewUser,
        loginForm,
        setLoginForm,
        login,
        tokenSession,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };

// JSON.parse(JSON.stringify({hola:"hola"}))
