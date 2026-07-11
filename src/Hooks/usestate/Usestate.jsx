import React, { useState } from 'react'

export const Usestate = () => {
    // 1.counter
    let [counter, setCounter] = useState(0)

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

            {/* 2. */}
        </section>
    )
}
