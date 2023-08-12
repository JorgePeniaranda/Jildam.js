import React from 'react'
import { FiEdit, FiX } from "react-icons/fi";
import PasswordField from '../PasswordField';

const BottomFieldsCSS = "bg-white dark:bg-[#3d3e3e]";
const FieldsCSS = "w-1/4 p-3 text-center";
const buttonOptionsStyle = "w-8 h-8 cursor-pointer";

export default function UserRow({ web, user, pass }) {
    return (
        <tr>
            <td className={BottomFieldsCSS + ' ' + FieldsCSS}>
                <a href='https://www.google.com' target="_blank" className='text-blue-600 hover:text-blue-500 underline underline-offset-2' rel="noreferrer">{web}</a>
            </td>
            <td className={BottomFieldsCSS + '  ' + FieldsCSS}>{user}</td>
            <td className={BottomFieldsCSS + ' ' + FieldsCSS}>
                <PasswordField pass={pass} />
            </td> {/* copiar al clickear, boton mostrar pass */}
            <td className={BottomFieldsCSS + ' ' + FieldsCSS}>
                <div className='flex w-full justify-around transition-all ease-linear px-8 items-center'>
                    <FiEdit className={'hover:text-blue-600 ' + buttonOptionsStyle} />
                    <FiX className={'hover:text-red-600 ' + buttonOptionsStyle} />
                </div>
            </td>
        </tr>
    )
}
