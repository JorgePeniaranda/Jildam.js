import React from 'react'
import { useLocalStorage } from '../Hooks/useLocalStorage';
import { User } from '../Utils/User';
import { Account } from '../Utils/Account';

const UserContext = React.createContext();

// const listaTempUsers = [
//     new User(1, "email@email.com", "user", "name", "lastName", "bio", "photo", [
//         new Account(1, "https://xdmoment.netlify.app/", "lol", "12345678"),
//         new Account(2, "https://xdmoment.netlify.app/", "lol", "12345678"),
//         new Account(3, "https://xdmoment.netlify.app/", "lol", "12345678"),
//         new Account(4, "https://xdmoment.netlify.app/", "lol", "12345678"),
//         new Account(5, "https://xdmoment.netlify.app/", "lol", "12345678"),
//     ]),
// ]

const UserProvider = ({ children }) => {

    // Lista Usuarios
    const [userList, setUserList] = useLocalStorage("JildamUsers", []);

    // RegisterForm
    const [registerForm, setRegiterForm] = React.useState({ email: "", user: "", pass: "", confirmPass: "" })

    return (
        <UserContext.Provider value={
            {
                userList,
                setUserList,
                registerForm,
                setRegiterForm
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };


// JSON.parse(JSON.stringify({hola:"hola"}))