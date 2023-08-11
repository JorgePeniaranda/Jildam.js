import React from 'react'
import { FiLogOut } from "react-icons/fi";
import NavButton from './Components/Navbar-Buttons';
import JildamLogo from '../../Media/img/jildam.png'
import SwitchTheme from './Components/SwitchTheme';

export default function Navbar() {
    return (
        <nav className='w-full h-24 flex items-center z-100 bg-white dark:bg-[#222323] dark:text-white fixed top-0 justify-between select-none shadow-md'>
            <ul className='flex h-full items-center pl-3 w-1/5'>
                <img src={JildamLogo} alt='JildamLogo' className='h-full p-4 pr-0 pointer-events-none' />
                <h1 className='font-normal text-2xl'>Jildam</h1>
            </ul>
            <ul className='flex w-4/5 gap-5 text-xl justify-around'>
                <NavButton to="/main">Inicio</NavButton>
                <NavButton to="/manage">Gestionar Contraseñas</NavButton>
                <NavButton to="/profile">Perfil</NavButton>
            </ul>
            <ul className='flex items-center text-4xl gap-6 pr-9 w-1/5 justify-end'>
                <SwitchTheme />
                <FiLogOut className='cursor-pointer hover:text-red-600 ease-linear transition-all' />
            </ul>
        </nav>
    )
}
