import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AsideProfileButton({ to, text, className }) {
    return (
        <NavLink to={to} className={'bg-blue-600 hover:bg-blue-500 transition-all ease-linear text-white w-3/5 py-3 text-xl rounded-lg ' + className}>{text}</NavLink>
    )
}
