import React from 'react'
import LabelInputProfile from '../../Components/LabelInputProfile'

export default function PersonalizationProfile({ className }) {
    return (
        <div className='grid grid-cols-[45%_55%]'>
            <div className='flex flex-col items-center mt-[6.5rem]'>
                <img src='' className='w-40 h-40 rounded-full bg-red-600 select-none pointer-events-none' alt='Profile' />
                <button className='mt-2 text-blue-600 hover:text-blue-500 underline select-none underline-offset-2 font-semibold'>Cambiar</button>
            </div>
            <form className='flex flex-col items-center mt-[4.5rem]'>
                <LabelInputProfile labelText='Usuario' type='text' name='User' required readOnly />
                <LabelInputProfile labelText='Nombre' type='text' name='Name' required />
                <LabelInputProfile labelText='Apellido' type='text' name='LastName' required />
                <LabelInputProfile labelText='Biografía' type='textarea' name='Bio' required />
                <button type='submit' className='bg-blue-600 hover:bg-blue-500 transition-all ease-linear text-white font-medium text-xl py-2 w-2/6 rounded-2xl'>Guardar</button>
            </form>
        </div>
    )
}
