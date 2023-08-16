import React from 'react'

const InputClassName = 'mb-8 border-2 border-zinc-800/30 text-center py-3 w-3/4 rounded-md text-lg';

export default function LabelInputProfile({ labelText, type, name, required, readOnly, disabled }) {
  return (
    <>
      <label className='font-medium underline select-none' htmlFor={name}>{labelText}</label>
      {type === 'textarea' ? <textarea className={InputClassName + ' resize-y'} type={type} id={name} required={required} readOnly={readOnly} disabled={disabled} /> : <input className={InputClassName} type={type} id={name} required={required} readOnly={readOnly} disabled={disabled} />}
    </>
  )
}
