import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import ProductsCard from '@/Components/Shared/MiniComponents/ProductCard';
import React from 'react';

const New = async () => {
    const res = await fetch("http://localhost:4000/category")
    const categoryData = await res.json();

    const response = await fetch("http://localhost:4000/products")
    const productsData = await response.json();
    return (
        <div className='mb-15'>
            <div className='flex justify-between items-center'>
                <div>
                <CardsTitle title="New" titleColor=" Arrivals" shortDisc="Shop online for new arrivals and get free shipping!"></CardsTitle>
            </div>
            <div className='flex gap-8'>
                {
                    categoryData.map(category => (
                       <div className='uppercase font-semibold text-gray-500 hover:text-teal-500 cursor-pointer'>
                         <h1>{category.name}</h1>
                       </div>
                    ))
                }
            </div>
            </div>
           <div className='grid grid-cols-5  gap-4'>
                           {
                           productsData.
                           slice(0,10)
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

export default New;