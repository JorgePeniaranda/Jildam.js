import React from 'react'
import { FiEdit, FiX } from "react-icons/fi";
import PasswordField from '../PasswordField';
import TDContainer from '../TDContainer';

const buttonOptionsStyle = "w-8 h-8 cursor-pointer";

export default function UserRow({ web, user, pass }) {
    return (
        <tr>
            <TDContainer>
                <a href={web} target="_blank" className='text-blue-600 hover:text-blue-500 underline underline-offset-2 w-60 overflow-auto flex' rel="noreferrer">{web}</a>
            </TDContainer>
            <TDContainer className="w-full overflow-auto">{user}</TDContainer>
            <TDContainer>
                <PasswordField pass={pass} />
            </TDContainer>
            <TDContainer>
                <div className='flex w-full justify-around transition-all ease-linear px-8 items-center'>
                    <FiEdit className={'hover:text-blue-600 ' + buttonOptionsStyle} />
                    <FiX className={'hover:text-red-600 ' + buttonOptionsStyle} />
                </div>
            </TDContainer>
        </tr>
    )
}