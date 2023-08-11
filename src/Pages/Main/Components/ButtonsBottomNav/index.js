import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ButtonsBottomNav(props) {
    return (
        <NavLink to={props.to} className={'bg-blue-600 hover:bg-blue-500 dark:bg-indigo-800 dark:hover:bg-indigo-700 w-96 h-14 ease-linear transition-all flex items-center justify-center text-xl text-white ' + (props.className ? props.className : "")}>{props.children}</NavLink>
    )
}
