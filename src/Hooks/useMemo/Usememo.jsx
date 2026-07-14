import React, { useMemo, useState } from 'react'

export const Usememo = () => {

    const [num, setNum] = useState(0)
    const [dark, setDark] = useState(false)

    const bgtheme = useMemo(() => {
        return {
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        };
    }, [dark]);

    const doubleNum = useMemo(() => {
        console.log("render...");
        return slowFun(Number(num));
    }, [num]);


    return (
        <section className='flex flex-col min-h-screen mt-10 items-start w-full p-5'>
            <h1 className='font-bold text-3xl text-center w-full underline mb-2'>USEMEMO HOOK</h1>

            {/* 1. slow theme change */}
            <div style={bgtheme}>
                <h1 className='text-xl font-bold mb-2'>1.slow function</h1>
                <input
                    className='border'
                    value={num}
                    onChange={(e) => setNum(e.target.value)}
                    type="number" />

                <h1 className='font-bold text-2xl'>{doubleNum}</h1>

            </div>

            <button
                onClick={() => setDark((prev) => !prev)}
                className='border'>theme</button>

        </section>
    )
}

function slowFun(num) {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2
}