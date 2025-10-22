import React from 'react';
import { FaCarAlt, FaCaravan } from 'react-icons/fa';

const ServicesCard = ({title,subtitle,icon}) => {
    return (
        <div>
            <div className='h-50 rounded-sm border border-gray-300 px-8 py-4 flex flex-col justify-center items-center space-y-3'>
                <div className='text-5xl text-center text-[#5CAF90]'>
                    {icon}
                </div>
                <h1 className='text-2xl font-medium text-gray-600'>{title}</h1>
                <p className='text-center text-gray-400'>{subtitle}</p>
            </div>
        </div>
    );
};

export default ServicesCard;