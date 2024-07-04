import React, { useState, useCallback, useEffect, useRef } from 'react'

const Hooks = () => {
    const [length, setLength] = useState(10);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState();
    const [counter, setCounter] = useState(0)
    const [show, setShow] = useState(true)
    const passwordRef = useRef(null);

    const count = () => {
        if (counter <= 19) setCounter(counter + 1);
    }
    const remove = () => {
        if (counter >= 1) setCounter(counter - 1);
    }

    const passwordGenerator = useCallback(() => {
        let pass = ''
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numberAllowed) str += "0123456789"
        if (charAllowed) str += "~!@#$%^&*"
        for (let i = 0; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword],
    )
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 99);
        window.navigator.clipboard.writeText(password);
    }, [password])

    useEffect(() => {
        passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])

    return (
        < div className='flex items-center flex-col'>
            <div className=' text-2xl h-64 text-center text-orange-600 w-[600px] max-w-md max-auto shadow-xl rounded-lg px-4 my-8  bg-teal-700'>
                Password Generator
                <div className='flex text-center mt-6 float-start shadow rounded-lg overflow-hidden mb-4'>
                    <input
                    id='text2'
                        type="text"
                        value={password}
                        placeholder='password'
                        className=' outline-none w-full py-1 px-3 '
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className='text-lg p-2 cursor-pointer bg-sky-700 text-white'
                    >
                        copy
                    </button>
                </div>

                <div className='flex text-sm gap-x-2 w-44'>
                    <div className='flex items-center gap-x-1'>
                        <input
                            id='email'
                            type="range"
                            min={6}
                            max={100}
                            value={length}
                            className=' cursor-pointer'
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label htmlFor="email" className=' w-20'>length: {length}</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={numberAllowed}
                            id='numberInput'
                            onChange={() => {
                                setNumberAllowed((prev) => !prev);
                            }}
                        />
                        <label 
                            htmlFor='numberInput'
                        >Numbers</label>
                    </div>
                    <div className='flex items-center gap-x-1'>
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id='numberInput2'
                            onChange={() => {
                                setCharAllowed((prev) => !prev);
                            }}
                        />
                        <label htmlFor='numberInput2' >Characters</label>
                    </div>
                </div>
                <div className=' mt-10 flex'>
                    <button className='p-2 text-lg bg-black text-white rounded-lg'>Count</button>
                    <span className='text-white ml-4 border-gray-400 border p-2 rounded-md w-11'>{counter}</span>
                    <button
                        className='p-2 ml-4 text-lg hover:bg-zinc-900 bg-black text-white rounded-lg'
                        onClick={count}
                    >click😁
                    </button>
                    <button
                        className='p-2 ml-4 text-lg bg-black text-white rounded-lg'
                        onClick={remove}
                    >Remove😪
                    </button>
                    <button
                        className='p-2 ml-1 text-lg bg-black text-white rounded-lg'
                        onClick={() => setShow(!show)}
                    >
                    {show ? "Hello" : "What's Up"}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Hooks
