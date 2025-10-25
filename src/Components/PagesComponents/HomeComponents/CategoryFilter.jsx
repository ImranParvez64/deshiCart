'use client'
import React, { useState } from 'react';
import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import ProductsCard from '@/Components/Shared/MiniComponents/ProductCard';

const CategoryFilter = ({ category, products }) => {
    const [selectCat, setSelectCat] = useState("All");

    const handleCategory = (cat) => setSelectCat(cat);

    const filterData = selectCat === "All"
        ? products
        : products.filter(product => product.category === selectCat);

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <CardsTitle
                        title="New"
                        titleColor=" Arrivals"
                        shortDisc="Shop online for new arrivals and get free shipping!"
                    />
                </div>

                <div className='flex gap-8'>
                    
                    {/* 🔹ALL Category Added */}
                    <div
                        className={`
                            uppercase text-sm font-semibold cursor-pointer 
                            ${selectCat === "All"
                                ? "text-teal-500 border-b-2 border-teal-500"
                                : "text-gray-500 hover:text-teal-500"}
                        `}
                        onClick={() => handleCategory("All")}
                    >
                        All
                    </div>

                    {/* 🔹Dynamic Categories */}
                    {category.map(cat => (
                        <div
                            key={cat.id}
                            className={`
                                uppercase text-sm font-semibold cursor-pointer 
                                ${selectCat === cat.name
                                    ? "text-teal-500 border-b-2 border-teal-500"
                                    : "text-gray-500 hover:text-teal-500"}
                            `}
                            onClick={() => handleCategory(cat.name)}
                        >
                            {cat.name}
                        </div>
                    ))}
                </div>
            </div>

            <div className='grid grid-cols-5 gap-4 mt-6'>
                {filterData.slice(0,10)
                .map(product => (
                    <ProductsCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default CategoryFilter;
