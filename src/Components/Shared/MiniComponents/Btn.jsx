import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Btn = ({btnPrimary}) => {
    return (
        <div>
            <button className='text-md bg-[#468473] text-white font-semibold px-12 py-3 flex gap-4 justify-center items-center cursor-pointer'>{btnPrimary} <MdKeyboardArrowDown className='font-bold'/></button>
        </div> 
          );
};

export default Btn;