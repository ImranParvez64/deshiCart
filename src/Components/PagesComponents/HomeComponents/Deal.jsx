import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import React from 'react';
import ProductsCard from '../../Shared/MiniComponents/ProductCard';

const Deal = async() => {
    const res = await fetch("http://localhost:4000/products")
    const productsData = await res.json();
    
    return (
        <div className='mb-15'>
            <CardsTitle title="Popular" titleColor="Products" shortDisc="Don't wait. The time will never be just right."></CardsTitle>
            <div className='grid grid-cols-5  gap-4'>
                {
                productsData.sort((a,b)=>b.rating-a.rating)
                .slice(0,5)
                .map(product => 
                (
                    <ProductsCard key={product.id} product={product}></ProductsCard>
                )
                )
            }
            </div>
        </div>
    );
};

export default Deal;