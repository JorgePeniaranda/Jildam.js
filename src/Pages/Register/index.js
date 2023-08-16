import React from 'react'
import Container from '../../Components/Container'
import ContainerSessionForm from '../../Components/ContainerSessionForm'
import InputSessionForm from '../../Components/InputSessionForm'
import { NavLink } from 'react-router-dom'

export default function Register() {
    return (
        <Container className='flex flex-col items-center h-full  '>
            <ContainerSessionForm>
                <h1 className='select-none text-3xl'>Regístrate</h1>
                <InputSessionForm />
                <InputSessionForm />
                <InputSessionForm />
                <InputSessionForm />
                <NavLink to='/login' className='select-none'>¿Tienes una cuenta? ¡Inicia sesión!</NavLink>
                <input type='checkbox' />
                <label>Acepto los <NavLink to='/terms'>terminos y condiciones</NavLink></label>
                <button type='submit' className='select-none'>Iniciar Sesión</button>
            </ContainerSessionForm>
        </Container>
    )
}
