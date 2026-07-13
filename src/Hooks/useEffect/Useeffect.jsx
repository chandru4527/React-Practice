import React, { useEffect, useState } from 'react'

export const Useeffect = () => {

    // 1. user details
    const [user, setUser] = useState([])

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1')
        const data = await res.json();
        setUser(data)
    }

    const [times, setTimes] = useState(new Date())
    // console.log(times);

    // 1. get use details
    // useEffect(() => {
    //     getData()
    // }, [])

    // 2. get time 
    // useEffect(() => {

    //     const timer = setInterval(() => {
    //         setTimes(new Date())
    //     }, 1000)


    //     return () => {
    //         clearInterval(timer)
    //     }
    // }, [])

    // 3. img slider
    const slider = [
        {
            slideimg: "https://images.pexels.com/photos/4124074/pexels-photo-4124074.jpeg",
            slidetittle: "nature"
        },
        {
            slideimg: "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg",
            slidetittle: "nature"
        },
        {
            slideimg: "https://images.pexels.com/photos/30649280/pexels-photo-30649280.jpeg",
            slidetittle: "nature"
        },
    ]
    const [s_index, setS_index] = useState(0)

    const cur_slide = slider[s_index]

    const nextSlide = () => {
        setS_index((prev) => {
            return (prev + 1) % slider.length
        })
    }

    const prevSlide = () => {
        setS_index((prev) => {
            return prev === 0 ? slider.length - 1 : prev - 1
        })
    }

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         nextSlide()
    //     }, 3000)

    //     return () => clearInterval(timer)

    // }, [s_index])

    // 4.debounce 
    const [search, setSearch] = useState("");
    const [debounce, setDebounce] = useState("");
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setDebounce(search);
    //     }, 500);

    //     // console.log('settimout');


    //     return () => clearTimeout(timer);
    // }, [search]);

    // useEffect(() => {
    //     if (!debounce) return;

    //     fetch(`https://dummyjson.com/products/search?q=${debounce}`)
    //         .then((res) => res.json())
    //         .then((data) => setProducts(data.products));
    // }, [debounce]);

    // console.log(products);

    // 5. countdown timer

    const [count, setCount] = useState(60)
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return
        if (count === 0) return

        const timer = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(timer)

    }, [count, isRunning])


    return (
        <section className='flex flex-col min-h-screen mt-10 items-start w-full p-5'>
            <h1 className='font-bold text-3xl text-center w-full underline mb-2'>USEEFFECT HOOK</h1>

            {/*1.get data  */}
            <div>
                <h1 className='font-bold text-xl underline'>1.User Details </h1>
                <ul>
                    <li> <strong>Name : </strong> {user.name}</li>
                    <li> <strong>Usename : </strong> {user.username}</li>
                    <li> <strong>Email : </strong> {user.email}</li>
                    <li> <strong>Phone : </strong> {user.phone}</li>
                    <li> <strong>User Webite : </strong> {user.website}</li>
                </ul>
            </div>

            {/* 2.display the current time day date*/}
            <div className='mt-2'>
                <h1 className='font-bold text-xl underline'>2.get Time </h1>

                <h1><strong>Today Day : </strong>{times.toDateString()}</h1>
                <h1><strong>Today Date : </strong>{times.toLocaleDateString()}</h1>
                <h1><strong>Today Time : </strong>{times.toLocaleTimeString()}</h1>
            </div>

            {/* 3. img silder*/}
            <div className='mt-2'>
                <h1 className='font-bold text-xl underline mb-2'>3.Img slider</h1>

                <div className='border h-50 object-cover'>
                    <img
                        src={cur_slide.slideimg}
                        alt={cur_slide.slidetittle}
                        className='h-50 object-cover'
                    />
                </div>
                <div className='grid grid-cols-2 mt-2 gap-2'>
                    <button
                        onClick={() => prevSlide()}
                        className='bg-green-600 text-white'
                    >
                        prev
                    </button>
                    <button
                        onClick={() => nextSlide()}
                        className='bg-blue-600 text-white'
                    >next</button>
                </div>
            </div>

            {/* 4.debounce for search wait 500ms time*/}
            <div className="mt-5 flex flex-col">
                <h1 className='font-bold text-xl underline mb-2'>3.search debounce</h1>
                <p className='font-bold'> search input</p>
                <input
                    className='border focus:outline-blue-600 px-2 transition-all'
                    name='search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text" />

                <h1 className='text-sm font-semibold mt-2'>if you type any in this input output shows only in console</h1>
            </div>

            {/* contown timer */}
            <div className="mt-5 flex flex-col">
                <h1 className='font-bold text-xl underline mb-2'>4.countdown timer</h1>
                <h1 className='text-xl font-semibold'>countDown {count}</h1>

                <div className='grid grid-cols-2 gap-2 mt-2'>
                    <button
                        className='border'
                        onClick={() => setIsRunning(!isRunning)}
                    >
                        {!isRunning ? "start" : " pause"}
                    </button>

                    <button
                        onClick={() => {
                            setIsRunning(false)
                            setCount(60)
                        }}
                        className='border'
                    >
                        reset
                    </button>
                </div>

            </div>


        </section>
    )
}
