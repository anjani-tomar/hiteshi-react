import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count, setCount] = useState(0);

    // useEffect with an empty dependency array runs only once after the initial render
    useEffect(() => {
        document.title = `You clicked ${count} times`;
        console.log(document.title);
    }, [count]); 
  return (
      <div className=' p-10 text-center'>
        <p>You cliked {count} times</p>
      <p>count: </p>{count}
          <button onClick={() => setCount(count + 1)} className='p-2 rounded-md border-emerald-50 bg-zinc-700 hover:bg-zinc-800 '>incerment</button>
    </div>
  )
}

export default Effect
