import React from 'react';
import './CSS/others.css';
const OfferCard = ({first,last,img}) => {
    return (
      <div className='h-50'>
         <div className={` h-45 w-124 absolute bg-cover  flex justify-center items-end flex-col text-white pr-10 space-y-2 text-end`} style={{ backgroundImage: `url(${img})` }} >
        <div className='overly1'>
        </div>
        <h1 className='text-3xl font-semibold'>{first} <br />{last}</h1>
        <button className='btn btn-accent w-30 text-[17px]'>Shop Now</button>
</div>
      </div>
    );
};

export default OfferCard;