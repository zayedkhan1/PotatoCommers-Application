import React from 'react';
import { food_list } from '../JSinfo/Dishesitem';
import ratingStar from '../../assets/frontend_assets/rating_starts.png'
import addIcon from '../../assets/frontend_assets/add_icon_white.png'


const Dishes = () => {

  return (
    <div>
      <div className='w-10/12 mx-auto'>
        <h2 className='text-3xl mb-10 font-bold mt-10'>Top Dishes near you</h2>
        <div>


          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
            {food_list.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow hover:shadow-lg transition w-full max-w-xs flex flex-col"
              >
                {/* Image + Button */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-t-xl h-48 w-full object-cover"
                  />
                  <button className="absolute w-[25px] bottom-2 right-2 bg-white rounded-full shadow p-1">
                    <img src={addIcon} alt="add Icon" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4 flex-1 flex flex-col">
                  <div className='flex items-center justify-between'>
                    <div>
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                    </div>
                    <div>
                      <img src={ratingStar} alt="star" />
                    </div>
                  </div>


                  {/* Description */}
                  <p className="text-gray-500 text-sm mt-1 flex-1">
                    {item.description}
                  </p>

                  {/* Price */}
                  <p className="text-orange-600 font-bold text-lg mt-2">
                    ${item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </div>
  );
};

export default Dishes;