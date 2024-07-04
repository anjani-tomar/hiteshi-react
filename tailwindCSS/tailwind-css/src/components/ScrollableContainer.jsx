import React, { useEffect, useRef } from 'react';

const ScrollableContainer = () => {
    const contentRef = useRef(null);

    useEffect(() => {
   
        if (contentRef.current) {
            contentRef.current.scrollTop = 0;
        }
    }, []);

    return (
        <div className="container bg-slate-950 p-60">
            <div className="content" ref={contentRef}>
         
                <p>
                    {/* Sample content */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                    vehicula gravida orci, ac feugiat justo congue non. Nulla facilisi.
                    Duis lacinia nunc eget nisi dictum, a sollicitudin turpis blandit.
                    Donec quis ante quis libero finibus finibus nec et ligula. Morbi
                    convallis, nunc ut consequat tristique, urna mauris fringilla velit,
                    et varius justo augue id quam.
                </p>
            </div>
        </div>
    );
};

export default ScrollableContainer;
