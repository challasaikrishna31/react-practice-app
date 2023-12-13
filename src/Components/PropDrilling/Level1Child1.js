import React, { memo, useEffect, useState } from 'react'

const Level1Child1 = ({ parentProp2 }) => {
    const [clild1Prop, setChild1Prop] = useState(0);
    useEffect(() => {
        console.log("child1-useEffect");
    }, [])
    console.log("child1");
    return (
        <div className='"p-2 m-2 flex flex-col bg-blue-100 w-40 h-40 items-center"'>

            <div className="font-bold">
                Child 1
            </div>
            <div className="font-bold">
                parentProp: {parentProp2}
            </div>
        </div>

    )
}

export default memo(Level1Child1)