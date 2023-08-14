import React from 'react'
import Container from '../../Components/Container'
import ButtonsBottomNav from './Components/ButtonsBottomNav'
import { UserContext } from '../../Contexts/userContext';

export default function Main(props) {
    const { userList } = React.useContext(UserContext);
    return (
        <Container className='flex flex-col relative items-center justify-center transition-all ease-linear'>
            <p className='text-6xl font-semibold mb-16'>Bienvenido, {userList[0].user}</p>
            <nav className='bg-white dark:bg-[#222323] absolute bottom-0 z-20 flex w-full h-36 select-none items-center shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1),_0_-4px_6px_-4px_rgb(0_0_0_/_0.1)] justify-around'>
                <ButtonsBottomNav to='/manage'>Gestionar Contraseñas</ButtonsBottomNav>
                <ButtonsBottomNav to='/profile'>Perfil</ButtonsBottomNav>
            </nav>
        </Container>
    )
}
