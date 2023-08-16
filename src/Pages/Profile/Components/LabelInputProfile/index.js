import React from 'react'

export default function LabelInputProfile({ labelText, type, name, required, readOnly, disabled }) {
  return (
    <>
      <label className='font-medium underline select-none' htmlFor={name}>{labelText}</label>
      <input className='mb-8 border-2 border-zinc-800/30 text-center py-3 w-3/4 rounded-md text-lg' type={type} id={name} required={required} readOnly={readOnly} disabled={disabled} />
    </>
  )
}
