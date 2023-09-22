import React from 'react'

export default function TopRow(props) {
    return (
        <th className={'border-b-4 select-none border-blue-600 w-1/4 p-3 text-center ' + props.className}>{props.children}</th>
    )
}
