import React, { useEffect, useState } from 'react'

const Level1Child2 = ({ parentProp, increment }) => {
    const [clild1Prop, setChild1Prop] = useState(0);
    useEffect(() => {
        console.log("child2-useEffect");
    }, [])
    console.log("child2");
    return (
        <div className='"p-2 m-2 flex flex-col bg-blue-100 w-40 h-40 items-center"'>

            <div className="font-bold">
                Child 2
            </div>
            <div className="font-bold">
                parentProp: {parentProp}
            </div>
            <button className='m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={increment}>increment</button>

        </div>

    )
}

export default Level1Child2