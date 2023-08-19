import React from 'react'

export default function InputSessionForm({ type, placeholder, autoComplete }) {
    return (
        <input type={type || 'text'} placeholder={placeholder} autoComplete={autoComplete} className='border border-zinc-600/40 w-3/6 py-3 px-7 bg-zinc-100 rounded-lg placeholder:select-none text-center text-lg outline-blue-600' />
    )
}
