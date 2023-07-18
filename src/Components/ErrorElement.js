import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const err = useRouteError();
    return (
        <div className='flex items-center justify-center bg-slate-200 w-full h-screen m-2 p-2 rounded-lg'>
            <div className="flex flex-col bg-red-400 p-6 rounded-lg w-96 h-96  items-center justify-center">
                <div className='text-lg font-bold'>Oops!!</div>
                <div className='font-bold'>Something Went Wrong!!</div>
                {err.message && <div className='font-medium'> {err.message}</div>}
                {(err.status || err.statusText) && <div className='font-medium'> {err.status + " : " + err.statusText}</div>}
                <div className='font-medium'>Please check console for more info...</div>
            </div>
        </div>
    )
}

export default ErrorElement