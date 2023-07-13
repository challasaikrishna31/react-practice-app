import React, { useEffect, useState } from 'react'

const BasicMessage = () => {
    const [counter, setCounter] = useState(0);
    const [action, setAction] = useState("");
    useEffect(() => {
        let interval;
        if (action == "start" || action == "resume") {
            interval = setInterval(() => {
                setCounter((prev) => prev + 1)
            }, 1000)
        } else if (action == "reset") {
            setCounter(0);
            clearInterval(interval);
        } else if (action == "pause") {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [action])

    return (
        <div className='h-screen flex items-center justify-center'>
            <div class="p-2 m-2 flex flex-col justify-around bg-gray-100 w-96 h-96 items-center">
                <div class="font-bold">
                    Hello Welcome!!!!!
                </div>

            </div>
        </div>

    )
}

export default BasicMessage