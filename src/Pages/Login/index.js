import React from 'react'
import Container from '../../Components/Container'
import ContainerSessionForm from '../../Components/ContainerSessionForm'
import InputSessionForm from '../../Components/InputSessionForm'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <Container className='flex justify-center items-center h-full'>
            <ContainerSessionForm>
                <h1 className='select-none text-5xl font-semibold items-end flex h-1/6'>Loguearte</h1>
                <form className='flex flex-col h-4/6 items-center justify-center w-full gap-7'>
                    <InputSessionForm type='text' placeholder='E-Mail...' />
                    <InputSessionForm type='password' placeholder='Contraseña...' />
                    <NavLink to='/register' className='select-none text-blue-600 hover:text-blue-400 underline underline-offset-2'>¿No tienes una cuenta? ¡Regístrate!</NavLink>
                </form>
                <button type='submit' className='select-none text-white bg-blue-600 hover:bg-blue-500 transition-all ease-linear font-medium text-xl py-3 px-5 rounded-lg'>Iniciar Sesión</button>
            </ContainerSessionForm>
        </Container>
    )
}
