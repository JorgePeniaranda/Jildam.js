import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavButton(props) {
    return (
        <NavLink to={props.to} className={'hover:scale-105 hover:underline underline-offset-4 ease-linear transition-all hover:bg-gray-200/40 hover:text-blue-500 py-2 px-10 rounded-2xl ' + (props.className ? props.className : "")}>{props.children}</NavLink>
    )
}
