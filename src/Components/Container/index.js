import React from 'react'

export default function Container(props) {
    return (
        <section className='mt-24'>
            {props.children}
        </section>
    )
}
