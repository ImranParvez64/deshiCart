import React from 'react';
import OfferCard from './OfferCard';

const Offer = () => {
    return (
        <div className='container mx-auto'>
            <div className='grid grid-cols-3 gap-8' >
                <OfferCard img={"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/12.jpg"} first={"Women's"} last={"Collection"}></OfferCard>
                <OfferCard img={"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/13.jpg"} first={"Kid's"} last={"Collection"}></OfferCard>
                <OfferCard img={"https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/14.jpg"} first={"Mens's"} last={"Collection"}></OfferCard>
            </div>
           
        </div>
    );
};

export default Offer;