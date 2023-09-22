import React from 'react'

export default function Container(props) {
    return (
        <section className={'w-full min-h-full pt-24 bg-white dark:bg-[#3d3e3e] dark:text-white ' + props.className}>
            {props.children}
        </section>
    )
}
