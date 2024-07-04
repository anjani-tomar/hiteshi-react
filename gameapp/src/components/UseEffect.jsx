import React, { useEffect } from 'react'

const UseEffect = ({color}) => {
    useEffect(() => {
 alert("color has been changed");
    }, [color])
  return (
    <div className='text-pink-600 text-lg  ' >
      Home color is : - {color} .
    </div>
  )
}

export default UseEffect
