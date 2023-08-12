import React from 'react'

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const Hola = 2;
    return (
        <UserContext.Provider value={
            {
                Hola: Hola,
            }
        }>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };


// JSON.parse(JSON.stringify({hola:"hola"}))