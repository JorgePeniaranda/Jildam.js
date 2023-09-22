import React, { useState } from 'react'
import { FiEye, FiEyeOff } from "react-icons/fi";

const eyeClass = "ml-1 w-6 h-5 cursor-pointer hover:scale-110 ";

export default function PasswordField({ pass }) {
    const [showPassword, setShowPassword] = useState(false);

    const changeShowPassword = () => setShowPassword(!showPassword)

    return (
        <div className='flex w-full items-center justify-center'>
            {showPassword ? <span className='cursor-pointer w-20 overflow-auto' onClick={console.log(pass)}>{pass}</span> : "••••••••"} {false ? <FiEye className={eyeClass + "text-zinc-400 hover:text-zinc-600"} onClick={() => changeShowPassword()} /> : <FiEyeOff className={eyeClass + "text-zinc-600 hover:text-zinc-400"} onClick={() => changeShowPassword()} />}
        </div>
    )
}
