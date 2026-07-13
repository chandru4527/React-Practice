import React, { useEffect, useRef, useState } from 'react'

export const Useref = () => {
    // 1. auto focus input
    const inputref = useRef(null)

    // 2.video player
    const videoref = useRef(null)
    const [isRunning, setIsRunning] = useState(false)
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);



    useEffect(() => {
        // inputref.current.focus()
        if (!videoref.current) return;

        isRunning ?
            videoref.current.play() :
            videoref.current.pause()

    }, [isRunning])


    // console.log(duration);
    // console.log(currentTime);

    return (
        <section className='flex flex-col min-h-screen mt-10 items-start w-full p-5'>
            <h1 className='font-bold text-3xl text-center w-full underline mb-2'>USEREF HOOK</h1>

            {/* 1.auto input focus on redering*/}
            <div className='mb-2'>
                <h1 className='text-xl font-bold mb-2 underline'>1. auto input focus </h1>
                <input className='border'
                    ref={inputref}
                    type="text" />
            </div>

            {/* 2.custom video player */}
            <div className='mb-2'>
                <h1 className='text-xl font-bold mb-2 underline'>2.video player</h1>
                <div>
                    <video
                        ref={videoref}
                        src="./sample video.mp4"
                        playsInline
                        muted
                        loop
                        // controls
                        className='h-50'
                        onTimeUpdate={() => {
                            setCurrentTime(videoref.current.currentTime);
                        }}
                        onLoadedMetadata={() => {
                            setDuration(videoref.current.duration);
                        }}
                    />

                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={(e) => {
                            videoref.current.currentTime = e.target.value;
                        }}
                    />

                    <div className='grid grid-cols-3 mt-2 gap-2'>
                        <button
                            onClick={() => videoref.current.currentTime = Math.max(0, videoref.current.currentTime -= 5)}
                            className='bg-red-600 text-white'
                        > 5 sec -</button>

                        <button
                            className='bg-blue-600 text-white'
                            onClick={() => {
                                setIsRunning(!isRunning)
                            }}
                        >
                            {!isRunning ? 'play' : 'pause'}
                        </button>

                        <button
                            onClick={() => {
                                videoref.current.currentTime += 5
                            }}
                            className='bg-green-600 text-white'
                        > 5 sec +</button>

                    </div>
                </div>
            </div>
        </section>
    )
}
