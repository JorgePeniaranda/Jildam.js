import React from 'react'
import Container from '../../Components/Container'
import ButtonsBottomNav from './Components/ButtonsBottomNav'

export default function Main(props) {
    return (
        <Container className='bg-white dark:bg-[#3d3e3e] flex items-center justify-center dark:text-white transition-all ease-linear'>
            <p className='text-6xl font-semibold'>Bienvenido, {props.user}</p>
            <nav className='dark:bg-[#222323] flex fixed w-full h-1/5 bottom-0 items-center shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1),_0_-4px_6px_-4px_rgb(0_0_0_/_0.1)] justify-around'>
                <ButtonsBottomNav to='/manage'>Gestionar Contraseñas</ButtonsBottomNav>
                <ButtonsBottomNav to='/profile'>Perfil</ButtonsBottomNav>
            </nav>
        </Container>
    )
}