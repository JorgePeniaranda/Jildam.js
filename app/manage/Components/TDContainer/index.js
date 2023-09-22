import React from 'react'

export default function TDContainer({ className, children }) {
    return (
        <td className={'bg-white dark:bg-[#3d3e3e] w-1/4 p-3 text-center ' + className}>
            {children}
        </td>
    )
}
