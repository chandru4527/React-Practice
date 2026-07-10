import React, { useEffect, useState } from 'react'

export const Useeffect = () => {

    const [product, setProduct] = useState([])

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await res.json();
        console.log(data)

        setProduct(data)
    }

    useEffect(() => {
        console.log('rendered');
        getData()
    }, [])
    return (
        <>
            <h1>products</h1>

            <div>
            <p>{product.title}</p>
            </div>
        </>
    )
}
