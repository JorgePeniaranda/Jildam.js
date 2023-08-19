import React from 'react'
import Container from '../../Components/Container'
import ContainerSessionForm from '../../Components/ContainerSessionForm'
import InputSessionForm from '../../Components/InputSessionForm'
import { NavLink } from 'react-router-dom'

export default function Register() {
    return (
        <Container className='flex flex-col justify-center items-center h-max'>
            <ContainerSessionForm className='my-8'>
                <h1 className='select-none text-5xl font-semibold items-end flex h-1/6 mt-7 mb-12'>Regístrate</h1>
                <form className='flex flex-col h-3/6 items-center justify-center w-full gap-7'>
                    <InputSessionForm type='text' placeholder='E-Mail...' />
                    <InputSessionForm type='text' placeholder='Usuario...' />
                    <InputSessionForm type='password' placeholder='Contraseña...' />
                    <InputSessionForm type='password' placeholder='Confirmé Contraseña...' />
                </form>
                <div className='flex items-center justify-start gap-1 mt-1 select-none'>
                    <input type='checkbox' id='termsCheckbox' />
                    <label htmlFor='termsCheckbox'>Acepto los <NavLink to='/terms' target='_blank' className='text-blue-600 hover:text-blue-400 underline underline-offset-2'>Terminos y Condiciones</NavLink></label>
                </div>
                <NavLink to='/login' className='text-blue-600 hover:text-blue-400 underline underline-offset-2 mt-1 select-none'>¿Tienes una cuenta? ¡Inicia sesión!</NavLink>
                <button type='submit' className='select-none text-white bg-blue-600 hover:bg-blue-500 transition-all ease-linear font-medium text-xl py-3 px-5 rounded-lg mt-9 mb-5'>Registrarse</button>
            </ContainerSessionForm>
        </Container>
    )
}