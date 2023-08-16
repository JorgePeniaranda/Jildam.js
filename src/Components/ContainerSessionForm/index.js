import React from 'react'

export default function ContainerSessionForm({ className, children }) {
    return (
        <div className={'bg-white w-2/5 py-7 rounded-lg shadow-[rgba(0,_0,_0,_0.02)_0px_1px_3px_0px,_rgba(27,_31,_35,_0.15)_0px_0px_0px_1px] h-5/6 flex flex-col items-center text-center ' + className}>
            {children}
        </div>
    )
}
