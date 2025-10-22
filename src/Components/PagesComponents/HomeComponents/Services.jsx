import React from 'react';
import ServicesCard from './ServicesCard';
import { FaCaravan } from 'react-icons/fa';
import { GiCottonFlower } from "react-icons/gi";
import { PiSealPercentBold } from "react-icons/pi";
import { RiSecurePaymentFill } from "react-icons/ri";



const Services = () => {
    return (
        <div className='mb-10'>
           <div className=' grid grid-cols-4 gap-4'>
             <ServicesCard title={"Free Shipping"} subtitle={"Free shipping on all US order or order above $200"} icon={<FaCaravan />}></ServicesCard>
             <ServicesCard title={"24X7 Support"} subtitle={"Contact us 24 hours a day, 7 days a week"} icon={<GiCottonFlower />}></ServicesCard>
             <ServicesCard title={"30 Days Return"} subtitle={"Simply return it within 30 days for an exchange"} icon={<PiSealPercentBold />}></ServicesCard>
             <ServicesCard title={"Payment Secure"} subtitle={"Best Payment gateway in Bangladesh"} icon={<RiSecurePaymentFill />}></ServicesCard>
           </div>
        </div>
    );
};

export default Services;