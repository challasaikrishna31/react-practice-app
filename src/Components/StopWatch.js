import React, { useEffect, useState } from 'react'

const StopWatch = () => {
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
                    StopWatch
                </div>
                <div class="font-bold text-4xl">
                    {counter}
                </div>
                <div className='flex'>
                    {(action == "" || action == "reset") && (<button class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAction("start")}>
                        <img src="https://icons.veryicon.com/png/o/miscellaneous/massager/start-18.png" alt="Start" className='h-5 w-5'></img>
                    </button>)}
                    {(action == "start" || action == "resume") && (<button class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAction("pause")}>
                        <img src="https://w7.pngwing.com/pngs/879/589/png-transparent-pause-logo-computer-icons-button-media-player-pause-button-rectangle-black-internet-thumbnail.png" alt="Pause" className='h-5 w-5'></img>
                    </button>)}
                    {(action == "pause") && (<button class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAction("resume")}>
                        <img src="https://www.vhv.rs/dpng/d/413-4131015_resume-button-icon-icon-hd-png-download.png" alt="Resume" className='h-5 w-5'></img>
                    </button>)}
                    {(action == "pause" || action == "start" || action == "resume") && (<button class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setAction("reset")}>
                        <img src="https://w7.pngwing.com/pngs/479/787/png-transparent-reset-button-icon-restart-free-text-internet-share-icon-thumbnail.png" alt="Reset" className='h-5 w-5'></img>
                    </button>)}
                </div>
            </div>
        </div>

    )
}

export default StopWatch