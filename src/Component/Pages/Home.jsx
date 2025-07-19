import React from 'react';
import Banner from './Banner';
import MenuOne from '../../assets/frontend_assets/menu_1.png'
import MenuTwo from '../../assets/frontend_assets/menu_2.png'
import MenuThree from '../../assets/frontend_assets/menu_3.png'
import MenuFour from '../../assets/frontend_assets/menu_4.png'
import MenuFive from '../../assets/frontend_assets/menu_5.png'
import MenuSix from '../../assets/frontend_assets/menu_6.png'
import MenuSeven from '../../assets/frontend_assets/menu_7.png'
import MenuEight from '../../assets/frontend_assets/menu_8.png'
import Dishes from './Dishes';

const FoodMenu = [
    {
        img: MenuOne,
        title: "salad"

    },
    {
        img: MenuTwo,
        title: "Rooles"

    },
    {
        img: MenuThree,
        title: "Desert"

    },
    {
        img: MenuFour,
        title: " Sandwich"

    },
    {
        img: MenuFive,
        title: "Cake"

    },
    {
        img: MenuSix,
        title: "PureVeg"

    },
    {
        img: MenuSeven,
        title: "Pasta"

    },
    {
        img: MenuEight,
        title: "Noodles"

    },

];

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            {/* Explore Menu section */}
            <section className='w-10/12 mx-auto mt-5'>
                <div>
                    <h2 className='text-3xl font-bold mb-4'>Explore Our Menu</h2>
                    <p className='text-gray-500'>Choose from a selection of nutritious and delicious meals. Order easily online <br /> and fuel your day with healthy, balanced dishes delivered to you.</p>
                </div>
                <div>
                    <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mt-10 place-items-center space-y-4 border-b-2 border-gray-400'>
                        {
                            FoodMenu.map((Food, idx) => (
                                <div key={idx} className='flex flex-col items-center justify-center w-[90px] space-y-2 text-gray-600 mb-5 ' >

                                    <img
                                        className='hover:bg-gray-300 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 '
                                        src={Food.img} alt={Food.title} />
                                    <p>{Food.title}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* Explore Menu section */}
            <section >
                <Dishes></Dishes>

            </section>
        </div>
    );
};

export default Home;