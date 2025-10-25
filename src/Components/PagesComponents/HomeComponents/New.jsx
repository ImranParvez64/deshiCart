
import React from 'react';
import CategoryFilter from './CategoryFilter';

const New = async () => {
    const res = await fetch("http://localhost:4000/category")
    const categoryData = await res.json();

    const response = await fetch("http://localhost:4000/products")
    const productsData = await response.json();
    return (
        <div className='mb-15'>
            <CategoryFilter category={categoryData} products={productsData} />
        </div>
    );
};

export default New;