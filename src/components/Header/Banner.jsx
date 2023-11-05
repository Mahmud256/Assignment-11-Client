import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="relative h-[25vh] md:h-[59vh] lg:h-[89vh] bg-center bg-no-repeat">
                <div className="absolute bg-cover inset-0 bg-[url('./assets/banner/banner.jpg')] bg-no-repeat ">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]"></div>
                    <div className="absolute left-10 inset-0 flex justify-center items-center h-full">
                        <h2 className="text-xl lg:text-6xl text-white font-bold text-center">Online Group <br/> Study Assignment</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;