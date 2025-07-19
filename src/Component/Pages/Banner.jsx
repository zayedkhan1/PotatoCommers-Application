import React from 'react';
import bgImage from '../../assets/frontend_assets/header_img.png'

const Banner = () => {
    return (
        <div>
            <div className='relative min-h-110 w-10/12 mx-auto flex items-center justify-baseline rounded-xl mt-5'
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}

            >


                {/* <div className="relative z-10 text-start text-white p-4 ">
                    <div className="w-full md:w-8/12 ">

                        <h2 className='  text-4xl md:text-5xl font-semibold mb-6 text-white leading-tight'>
                            Order Your <br /> Favouraite Food Here

                        </h2>

                        <p className="mb-5 ">
                            Experience fine dining at home. Order chef-prepared meals, beautifully packaged and delivered with care for an unforgettable culinary experience.
                        </p>

                        <button className="bg-white text-gray-600 font-semibold  px-6 py-3   rounded-full    shadow-md  border border-transparent transition-all duration-300 ease-in-out hover:shadow-lg  hover:border-white/20 active:scale-95">
                            View Menu
                        </button>


                    </div>
                </div> */}
                <div className="relative z-10 text-white p-4 flex flex-col items-center md:items-start text-center md:text-start">
                    <div className="w-full md:w-8/12">
                        <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
                            Order Your <br /> Favourite Food Here
                        </h2>

                        <p className="mb-5">
                            Experience fine dining at home. Order chef-prepared meals, beautifully packaged and delivered with care for an unforgettable culinary experience.
                        </p>

                        <button className="bg-white text-gray-600 font-semibold px-6 py-3 rounded-full shadow-md border border-transparent transition-all duration-300 ease-in-out hover:shadow-lg hover:border-white/20 active:scale-95">
                            View Menu
                        </button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Banner;