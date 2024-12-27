import React, { useEffect, useState } from 'react'
import Level1Child1 from './Level1Child1';
import Level1Child2 from './Level1Child2.js';

const PropDrilling = () => {
    const [parentProp, setParentProp] = useState(0);
    const [parentProp2, setParentProp2] = useState(0);
    useEffect(() => {
        console.log("parent-useEffect");
    }, [])
    const increment = () => {
        setParentProp(prev => prev + 1)
        setParentProp(prev => prev + 1)
        setParentProp(prev => prev + 1)
        setParentProp(prev => prev + 1)
        setParentProp(prev => prev + 1)
    }

    const increment2 = () => {
        setParentProp2(prev => prev + 1)
    }
    console.log("parent");
    return (
        <div className="p-2 m-2 flex flex-col bg-gray-100 w-96 h-96 items-center rounded-lg">
            <div className="font-bold">
                Hello Welcome!!!!!
            </div>
            <div className="font-bold">
                {parentProp}
            </div>
            <button className='m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={increment}>increment</button>
            <div className="font-bold">
                {parentProp2}
            </div>
            <button className='m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' onClick={increment2}>increment 2</button>
            <div className="p-2 m-2 flex bg-gray-100 w-96 h-96 items-center">
                <Level1Child1 parentProp2={parentProp2} />
                <Level1Child2 parentProp={parentProp} increment={increment} />
            </div>
        </div>
    )
}

export default PropDrilling