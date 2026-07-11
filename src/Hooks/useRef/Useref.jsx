import React, { useRef } from 'react'

export const Useref = () => {
    const inputref = useRef(null)

    return (
        <>
            <h1>Username</h1>
            <input ref={inputref} type="text" onFocus={() => {
                inputref.current.hidden
                console.log('clicked')
            }} />
        </>
    )
}
