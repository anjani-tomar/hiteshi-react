import React, { useState } from 'react'

const Counter = () => {
    const [counte, setCounte] = useState(0);

    const counter = () =>{
        setCounte(counte + 1)
    }

  return (
    <div className=' text-center p-10'>
      <span>count: {counte}</span>
      <br/>
      <button onClick={counter}>click😁</button>
      <Properties massage="hello students"/>
    </div>
  )
}
 
const Properties = (props) =>{
    return <p>{props.massage}</p>
}

export default Counter

