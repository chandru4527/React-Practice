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
        const tasks = [...form,data]
        setForm(tasks)

        
    }

        console.log(form);


    return (

        <section className='flex flex-col items-center pt-10 min-h-screen'>

            {/* 1 counter */}
            <div>
                <h1 className='font-bold text-xl'>1.counter app</h1>
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
            <div>
                <h1 className='font-bold text-xl'>2.form data</h1>

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
                {
                    form.map((item,index) => (
                        <div key={index}>
                            <h1 ><strong>Name :</strong>{item.name}</h1>
                            <h1><strong>Email :</strong>{item.email}</h1>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
