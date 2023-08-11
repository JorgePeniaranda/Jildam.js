import React from 'react'

export default function Container(props) {
    return (
        <section className={'pt-24 w-full h-[calc(100%-6rem)] ' + props.className}>
            {props.children}
        </section>
    )
}
