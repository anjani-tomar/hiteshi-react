import React, { useMemo, useState } from 'react'

const Class3 = ({ number }) => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([])
    const Calculating = useMemo(() => expensiveCalculation(count), [count]);

    const incerment = () => {
        setCount(count + 1)
    }
    const addTodos = () => {
        setTodos((t) => [...t, "Add todos"]);
    }


    return (
        <div className=' p-10 text-center'>
            <button onClick={addTodos} className='p-2 rounded-md border-emerald-50 bg-zinc-700 hover:bg-zinc-800 '>add toods</button><br />
            <span >
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>

                })}
            </span>
            count:{count}
            <button onClick={incerment} className='p-2 rounded-md border-emerald-50 bg-zinc-700 hover:bg-zinc-800 '>click me</button>
            <h2>calculatin counter </h2>
            {Calculating}
        </div>
    )
}
const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default Class3
