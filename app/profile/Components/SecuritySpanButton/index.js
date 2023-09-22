import React from 'react'

export default function SecuritySpanButton({ children }) {
    return (
        <div className='flex flex-col justify-center items-center select-none'>
            <h3 className='text-3xl font-semibold mb-1'>{children}</h3>
            <button className='bg-red-600 hover:bg-red-500 w-1/4 py-2 text-white rounded-lg text-lg font-medium'>{children}</button>
        </div>
    )
}
