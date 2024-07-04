import React from 'react';
import Slider from 'react-slick';
import { advanture, books, books2, books3, books4, books5} from '../assets/images';

const SliderImg = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };

    return (
        <div>
            <Slider {...settings}>
                <div className=' mr-5'>
                    <img src={books} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={advanture} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={books3} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={books4} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={books5} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={advanture} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={books2} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
                <div>
                    <img src={books3} alt="" className='w-[500px] rounded-full object-contain' />
                </div>
            </Slider>
        </div>
    );
};

export default SliderImg;
