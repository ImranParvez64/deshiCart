import React from 'react';
import CategoryCard from './CategoryCard';

const Category = async() => {
    const res = await fetch("http://localhost:4000/category")
    const categoryData = await res.json();
    
    return (
        <div className='mb-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 mx-auto container p-2  gap-4'>
            {
                categoryData.map(categoryCard => (
                    <CategoryCard key={categoryCard.id} categoryCard={categoryCard}></CategoryCard>
                ))
            }
        </div>
    );
};

export default Category;