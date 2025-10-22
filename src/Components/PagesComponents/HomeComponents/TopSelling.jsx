import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import MiniCard from '@/Components/Shared/MiniComponents/MiniCard';
import React from 'react';

const TopSelling = async() => {
    const res = await fetch("http://localhost:4000/products")
    const productsData = await res.json();
    return (
        <div>
        <CardsTitle title={"Top"} titleColor={"Selling"}></CardsTitle>
        <div className='grid grid-cols-4 gap-4 mb-10'>
            {
            productsData
            .slice(5,9)
            .map(product=>(
                <MiniCard product={product}></MiniCard>
            ))
        }
        </div>
        </div>
    );
};

export default  TopSelling;