import React, {useState} from 'react';

export function ReduxCounterPage() {

    const [counter, setCounter] = useState(0);
    const [theme, setTheme] = useState(true);
    const increase = () => {
        setCounter(count => count + 1)
    }

    const decrease = () => {
        if (counter > 0) {
            setCounter(count => count - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    const timeoutReset = () => {
        setTimeout(() => {
            reset();
        }, 500)
    }
    const btnClasses: string = 'absolute top-50 right-5 py-1 px-2 border rounded bg-blue-500'
    const bgClasses: string = theme ? 'bg-white' : 'bg-black/50'

    return (
        <>
            <div className={bgClasses +` border py-2 px-4 rounded flex flex-col items-center mb-2`}>
                <h1 className="items-center text-2xl">React Counter</h1>
                <button className={btnClasses} onClick={() => {setTheme(prev => !prev)}}>Change theme</button>
                <div className="my-2 border rounded w-full items-center flex flex-col h-[100px]">
                    <span className="mt-2 mb-2 ">{ counter }</span>
                    <div className="flex flex-column">
                        <button className="border bg-yellow-400 rounded-[25%] px-2 mr-2"  onClick={increase}>+</button>
                        <button className="border bg-blue-400 rounded-[25%] px-2 mr-2" onClick={decrease}>-</button>
                        <button className="border bg-red-600 rounded-[25%] px-2 mr-2" onClick={reset}>Reset</button>
                        <button className="border bg-red-400 rounded-[25%] px-1" onClick={timeoutReset}>Async</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ReduxCounterPage;