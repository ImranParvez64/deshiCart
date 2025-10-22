import React from 'react';

const CardsTitle = ({title,titleColor,shortDisc}) => {
    return (
        <div className='space-y-2 py-4'>
            <h1 className='text-3xl font-semibold text-gray-500'>{title} <span className='text-teal-400'>{titleColor}</span></h1>
            <p className='text-gray-400'>{shortDisc}</p>
        </div>
    );
};

export default CardsTitle;