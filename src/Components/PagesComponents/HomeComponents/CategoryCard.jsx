import React from 'react';

const CategoryCard = ({categoryCard}) => {
    return (
        <div className='flex flex-col justify-center items-center bg-[#F7F7F7] py-4 px-12 rounded-md w-auto '>
            <img className='w-12 pb-2' src={categoryCard.img} alt="" />
            <h1 className='text-xl cursor-pointer font-semibold text-gray-500'>{categoryCard.name}</h1>
            <p className='text-gray-400'>{categoryCard.totalQuantity} item</p>
        </div>
    );
};

export default CategoryCard;