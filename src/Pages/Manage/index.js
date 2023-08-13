import React from 'react'
import { FiSearch } from "react-icons/fi";
import Container from '../../Components/Container'
import UserRow from './Components/UserRow';
import TopRow from './Components/TopRow';
import { UserContext } from '../../Contexts/userContext';

export default function Manage() {
    const { userList } = React.useContext(UserContext);
    return (
        <Container className='flex items-center flex-col'>
            <h2 className='w-3/4 border-b-2 text-3xl font-semibold mt-10 border-zinc-700/60'>Gestionar Contraseñas</h2>
            <div className='w-3/4 h-9 flex justify-center mt-7 mb-3'>
                <FiSearch className='w-8 pl-2 h-full text-zinc-400 border bg-white border-zinc-700 border-r-0 rounded-l-lg' />
                <input type='search' placeholder='Buscar' className='w-[60%] outline-none py-1 border border-zinc-700 rounded-r-lg border-l-0 text-xl text-center' />
            </div>
            <table className='table-fixed w-3/4'>
                <thead>
                    <tr className='w-full'>
                        <TopRow>Web</TopRow>
                        <TopRow>Usuario</TopRow>
                        <TopRow>Contraseña</TopRow>
                        <TopRow>Opciones</TopRow>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList[0].accounts.map(account => {
                            return <UserRow key={userList[0].accounts.indexOf(account)} web={account.web} user={account.user} pass={account.pass} />;
                        })
                    }
                </tbody>
            </table>
            <button className='bg-blue-600 text-white font-bold w-12 h-12 fixed bottom-4 right-4 text-3xl pb-1 rounded-full hover:bg-blue-500 transition-all ease-linear'>+</button>
        </Container>
    )
}