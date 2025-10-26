import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import MiniCard from '@/Components/Shared/MiniComponents/MiniCard';
import React from 'react';

const TopRated = async() => {
    const res = await fetch("https://68fdd9b07c700772bb121465.mockapi.io/products")
    const productsData = await res.json();
    return (
        <div>
        <CardsTitle title={"Top"} titleColor={"Rated"}></CardsTitle>
        <div className='grid grid-cols-4 gap-4 mb-10'>
            {
            productsData
            .slice(10,14)
            .map(product=>(
                <MiniCard key={product.id} product={product}></MiniCard>
            ))
        }
        </div>
        </div>
    );
};

export default  TopRated;