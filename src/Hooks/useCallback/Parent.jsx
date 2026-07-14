import React, { useCallback, useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('rendered parent');
    },[])
    

    return (
        <section>
            <h1>Count: {count}</h1>

            <button
                onClick={() => setCount((prev) => prev + 1)}
                className="border"
            >
                Count Add
            </button>

            <Child handleClick={handleClick} />

        </section>
    );
};