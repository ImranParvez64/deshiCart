import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import MiniCard from '@/Components/Shared/MiniComponents/MiniCard';
import React from 'react';

const TopRated = async() => {
    const res = await fetch("http://localhost:4000/products")
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