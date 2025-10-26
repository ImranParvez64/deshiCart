import React from 'react';
import './CSS/others.css';

const OfferCard = ({ first, last, img }) => {
  return (
    <div
      className="rounded-sm w-full min-h-[250px]  bg-cover bg-center relative flex flex-col justify-end items-end p-5 text-white"
      style={{ backgroundImage: `url(${img})` }}
    >

      <div className="absolute inset-0 bg-black/30 rounded-sm"></div>


      <div className="relative text-right space-y-2">
        <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">
          {first} <br /> {last}
        </h1>
        <button className="btn btn-accent w-28 sm:w-32 text-[15px] sm:text-[17px]">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
