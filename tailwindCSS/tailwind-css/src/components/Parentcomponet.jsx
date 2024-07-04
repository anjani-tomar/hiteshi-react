import React, { useState } from 'react'

const Parentcomponet = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };
    return (
        <div>
            <h2>Counter App</h2>
            <p>Count: {count}</p>
            <Childcomponent count={count} onIncrement={incrementCount} onReset={resetCount} />
        </div>
    )
}
const Childcomponent = ({ count, onIncrement, onReset }) => {
    return (
        <div>
            <p>Count from Parent: {count}</p>
            <button className='p-4' onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
};

export default Parentcomponet
