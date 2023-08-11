import React from 'react'
import Container from '../../Components/Container'

const TopFieldsCSS = "bg-blue-600 text-white";
const BottomFieldsCSS = "bg-white border border-slate-600";
const FieldsCSS = "w-1/4 p-3 text-center ";

export default function Manage() {
    return (
        <Container>
            <h2>Gestionar Contraseñas</h2>
            <table className='table-fixed w-1/2'>
                <tr className='w-full'>
                    <th className={TopFieldsCSS + ' rounded-tl-2xl ' + FieldsCSS}>Web</th>
                    <th className={TopFieldsCSS + ' ' + FieldsCSS}>Usuario</th>
                    <th className={TopFieldsCSS + ' ' + FieldsCSS}>Contraseña</th>
                    <th className={TopFieldsCSS + ' rounded-tr-2xl ' + FieldsCSS}>Opciones</th>
                </tr>
                <tr className='w-full'>
                    <td className={BottomFieldsCSS + ' ' + FieldsCSS}>www.google.com</td>
                    <td className={BottomFieldsCSS + '  ' + FieldsCSS}>Jorge</td>
                    <td className={BottomFieldsCSS + ' ' + FieldsCSS}>12345678</td>
                    <td className={BottomFieldsCSS + ' ' + FieldsCSS}>Borrar</td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <button className='w-full h-full bg-blue-600 py-1 text-white font-bold text-lg rounded-br-2xl rounded-bl-2xl hover:bg-blue-500 transition-all ease-linear'>+ Agregar</button>
                    </td>
                </tr>
            </table>
        </Container>
    )
}
