import React, { useState } from 'react'

export const Usestate = () => {

    const [name, setName] = useState('')
    console.log('render');
    

    return (

        <div>

            <input 
            type="text" 
            name="name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
             />

             <h1>{name}</h1>
        </div>
    )
}
