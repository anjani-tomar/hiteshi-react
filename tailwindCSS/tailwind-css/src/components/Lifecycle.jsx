import React, { useEffect, useState } from 'react'

const Lifecycle = () => {
    const [apiData, setApiData] = useState("");
    const [data, setData] = useState();
    const [finalData, setFinalData] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://reqres.in/api/users?page=2");
        const data = await res.json();
        setApiData(data);
    }
    const onSubmit = () => {
        setApiData(`final data - ${data}`);
    }
    useEffect(() => {
        setFinalData("Welcome I'm loading data ........");
      setTimeout(() => {
            fetchData();
        }, 5000);
        // Mounting
  
    }, []);
    useEffect(() => {
        if (apiData?.data?.length > 0) {
            setFinalData("I Love You  😅" + apiData.toString());
        }
        const timer = setTimeout(() => {
            fetchData();
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
       
    }, [apiData])


    return (
        <div className='flex flex-col  text-white bg-black p-9'>
            <input className='p-2 text-black rounded-sm max-w-72' type="text" id='text' name='input' value={data} onChange={(e) => { setData(e.target.value) }} />
            <button className=' mt-10 mb-8 p-2 max-w-28 rounded-md border-emerald-50 bg-zinc-700 hover:bg-zinc-800 ' onClick={onSubmit}>submit</button>
            <span>Output - {finalData}</span>
        </div>
    )
}

export default Lifecycle
