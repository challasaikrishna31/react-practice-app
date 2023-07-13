import React from 'react'
import StopWatch from './StopWatch'
import { Outlet } from "react-router-dom";
const Body = () => {
    return (
        <div className='h-screen flex items-center justify-center bg-slate-500 w-full m-2 p-2 rounded-lg'>
            <Outlet />
        </div>
    )
}

export default Body