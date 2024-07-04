import React, { useEffect, useRef, useState } from 'react';
import { ReactLenis } from "@studio-freight/react-lenis";
import './scrolly.css';
import { stepsData } from '../constants/maping';
import { Link } from 'react-router-dom';


const Scrolly = ({ title, view }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const listRef = useRef(null);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const threshold = windowHeight * 0.1;
        let visibleIndex = 0;
        for (let i = 0; i < stepsData.length; i++) {
            const item = listRef.current.children[i];
            const rect = item.getBoundingClientRect();
            const itemTop = rect.top + scrollTop;
            if (itemTop < scrollTop + threshold) {
                visibleIndex = i;
            }
        }
        setCurrentIndex(visibleIndex);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='items-center flex flex-col mt-12 '>
            <div className='bg-black rounded-lg p-[30px]'>
                <div className='pt-20 flex flex-wrap relative z-10 mt-0 mb-0 ml-auto mr-auto'>
                    <div className='sticky z-10 flex flex-shrink-1 overflow-visible w-[616px] h-[1830px] p-0 inset-0 float-none'>
                        <div className='max-w-[536.3px] w-[616px]'>
                            <span className='text-[50px] sticky z-20 top-10'>{title}</span>
                        </div>
                        <div id="counter" className='text-center mb-48 text-3xl z-10 ml-50'>
                            <span className='sticky top-32'>0</span>
                            <span className='sticky top-32'>{`${currentIndex + 1}`.slice(-2)}</span>
                        </div>
                    </div>

                    <div className='max-w-[31.5%] w-[100%] flex relative ml-10 transform transition-all duration-100'>
                        <ReactLenis root options={{ orientation: "Vertical", gestureOrientataion: "both" }}>
                            <div className='slides max-w-[50rem] list w-[100%]' id="list" ref={listRef}>
                                {stepsData.map((step, index) => (
                                    <div key={index} className={`fade-item mx-auto mb-20 `}>
                                        <img src={step.image} alt="" className='mb-5' />
                                        <p className='text-3xl mt-5 transform transition-all duration-500 ease-in-out delay-200'>{step.title}</p>
                                        <div>
                                            <p className='mb-10 mt-10'>{step.description}</p>
                                            <p className=''>{step.para}</p>
                                            <p className=' mt-8'>{step.para2}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </ReactLenis>
                    </div>
                </div>
              
                <div className='text-center p-8'><Link to="/view"><span className='mb-2 border-b-[1px] border-b-neutral-600 cursor-pointer hover:transform-gpu'>{view}</span> </Link></div>
               
            </div>
        </section>
    );
}

export default Scrolly;
