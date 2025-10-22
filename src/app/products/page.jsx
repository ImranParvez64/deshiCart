import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import ProductsCard from '@/Components/Shared/MiniComponents/ProductCard';
import React from 'react';
import CategoryFilter from '@/app/products/CategoryFilter';



const page = async() => {
    const res = await fetch("http://localhost:4000/products")
    const productsData = await res.json();

     const response = await fetch("http://localhost:4000/category")
    const categoryData = await response.json();
    
    return (
        <div className='container mx-auto flex justify-between mt-10'>
            <div className='w-[20%]'>
                <div className='flex flex-col gap-8'>
                    
                {
                    categoryData.map(category => (
                        <CategoryFilter key={category.id} category={category} />
                    ))
                }
            </div>
            </div>
            <div className=' w-[80%]'>
                <div className='grid grid-cols-4 gap-8'>
                    {
                productsData
                .map(product => 
                (
                    <ProductsCard key={product.id} product={product}></ProductsCard>
                )
                )
            }
                </div>
            </div>
        </div>
    );
};

export default page;