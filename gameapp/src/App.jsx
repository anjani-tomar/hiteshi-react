import React, { useEffect, useState } from 'react';
// import DisplayEmojis from './components/DisplayEmojis'
import UseEffect from './components/UseEffect';

import './App.css';
const App = () => {
  useEffect(() => {
 
  }, [])
  
  const [counter, setCounter] = useState(1);
    function count (){
      if(counter < 20){
            setCounter(counter + 1) ;
      } else {
        alert('counter stoped')
      }
     }
      function decrement (){
      if(counter > 1){
          setCounter(counter - 1)
      }else{
        // alert("counter is not move")
      }

      }
  return (
    <section className='text-center pt-4  '>
    <UseEffect color = {'navy' + ' blue' + ' color'}/>
    <div className='text-center pt-4 d-flex'>
        <button onClick={count} className=' font-bold p-2 mt-4 border border-rose-600 mr-4 rounded-md'>➕</button>
        <button onClick={decrement} className=' font-bold p-2 mt-4 border border-rose-600 rounded-md'>➖</button>
        <span className='font-bold p-3 border-2 border-rose-600 ml-4 bg-rose-600 text-white rounded-lg'>  {counter} </span>
    
      {/* <DisplayEmojis/> */}
    </div>
    </section>
  );
};

export default App;

