import React, { useState } from 'react'

export const Usestate = () => {
    // 1.counter
    let [counter, setCounter] = useState(0)

    // 2.form register
    const [form, setForm] = useState([])
    const [data, setData] = useState({
        name: '',
        email: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target

        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const tasks = [...form, data]
        setForm(tasks)
    }

    // 3.shopping product qty 
    const [product, setProduct] = useState([
        {
            name: "Iphone 15 pro",
            brand: "apple Iphone",
            price: "72000",
            qty: 1
        }
    ])

    // const product_price = product.reduce((acc, item) => acc + item.price * item.qty, 0)
    // console.log(product_price)

    const addQty = (itemindex) => {
        const updated_product = product.map((item, index) =>
            index === itemindex ? { ...item, qty: item.qty + 1 } : item
        )
        setProduct(updated_product)
    }

    const removeQty = (itemindex) => {
        const updated_product = product.map((item, index) =>
            index === itemindex ? { ...item, qty: Math.max(1, item.qty - 1) } : item)
        setProduct(updated_product)
    }



    return (

        <section className='flex flex-col min-h-screen mt-10 items-start w-full p-5'>

            <h1 className='font-bold text-3xl text-center underline mb-2'>USESTATE HOOK</h1>

            {/* 1 counter */}
            <div className=''>
                <h1 className='font-bold text-xl underline'>1.counter app</h1>

                <p className='font-semibold text-xl'>counter {counter} </p>
                <div className='grid grid-cols-3 gap-2'>
                    <button className='bg-red-600 text-white font-semibold px-2 py-1 rounded'
                        onClick={() => {
                            setCounter(prev => Math.max(prev - 1, 0))
                        }}>
                        remove
                    </button>
                    <button className='bg-green-600 text-white font-semibold px-2 py-1 rounded'
                        onClick={() => setCounter(prev => prev + 1)}>
                        add
                    </button>
                    <button className='bg-blue-600 text-white font-semibold px-2 py-1 rounded'
                        onClick={() => setCounter(0)}>
                        reset
                    </button>
                </div>
            </div>

            {/* 2. form data*/}
            <div className='mt-5 p-2'>
                <h1 className='font-bold text-xl underline mb-2'>2.form data</h1>

                <form className='border p-2'
                    onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label>Name :</label>
                        <input className='border'
                            type="text"
                            name='name'
                            value={data.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label>Email :</label>
                        <input className='border'
                            type="email"
                            name='email'
                            value={data.email}
                            onChange={handleChange}
                        />
                    </div>


                    <button type='submit' className='bg-blue-600 text-white px-2 py-1 w-full mt-3'>submit</button>
                </form>

                <h1 className='font-bold text-xl'>lists</h1>

                {form.length === 0 && <p>no list</p>}
                {
                    form.map((item, index) => (
                        <div key={index}>
                            <h1 ><strong>Name :</strong>{item.name}</h1>
                            <h1><strong>Email :</strong>{item.email}</h1>
                        </div>
                    ))
                }
            </div>

            {/* 3.product add qty */}
            <div className='my-5'>
                <h1 className='font-bold text-xl underline'>3.Product</h1>
                {
                    product.map((item, index) => (
                        <div key={index}>
                            <h2 className='text-lg'><strong>Model Name: </strong>{item.name}</h2>
                            <h2 className='text-lg'><strong>model Brand: </strong>{item.brand}</h2>
                            <h2 className='text-lg'><strong>Model Price : </strong>{item.price * item.qty}</h2>
                            <h1 className='text-lg'><strong>Model Qty : </strong>{item.qty}</h1>
                            <div className='grid grid-cols-3 gap-2'>
                                <button
                                    onClick={() => { removeQty(index) }}
                                    className='bg-red-600 text-white font-semibold px-2 py-1 rounded'
                                >remove</button>
                                <button className='bg-green-600 text-white font-semibold px-2 py-1 rounded'
                                    onClick={() => { addQty(index) }}>
                                    add
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

            
        </section>
    )
}
