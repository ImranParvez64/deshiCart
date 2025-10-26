
import React from 'react';
import CategoryFilter from './CategoryFilter';

const New = async () => {
    const res = await fetch("https://68fdd9b07c700772bb121465.mockapi.io/category")
    const categoryData = await res.json();

    const response = await fetch("https://68fdd9b07c700772bb121465.mockapi.io/products")
    const productsData = await response.json();
    return (
        <div className='mb-15'>
            <CategoryFilter category={categoryData} products={productsData} />
        </div>
    );
};

export default New;