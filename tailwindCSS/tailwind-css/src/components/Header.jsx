import React from 'react'
import { personImg } from '../assets/images';
import SliderImg from './SliderImg';


const Header = () => {


    return (
        <>
            <div className='flex-none justify-around h-[100%] bg-fixed w-[30%]'>

            </div>
            <div className='text-center p-4 '><h6 className='text-[70px]  font-mono'>I'm joy</h6>   </div>
            <div className='flex '>

                <div className=' grow h-[80%]  shadow-[0_15px_70px_-30px_red] flex rounded-full justify-around'>
                    <img src={personImg} alt="" className=' object-contain hover:drop-shadow-[0_0px_12px_white] rounded-full  drop-shadow-2xl transition delay-200 hover:delay-300 duration-200 ease-in-out' />
                </div>
                {/* <div className='flex-none justify-around p-[50px] h-96 w-[30%]'>

                </div> */}
            </div>


            <SliderImg />
        </>
    )
}
export default Header
