import CardsTitle from '@/Components/Shared/MiniComponents/CardsTitle';
import React from 'react';
import ProductsCard from '../../Shared/MiniComponents/ProductCard';

const Deal = async () => {
    const res = await fetch("https://68fdd9b07c700772bb121465.mockapi.io/products", { cache: "no-store" });
    const productsData = await res.json();

    return (
        <div className="mb-12 container mx-auto px-3">
            
            <CardsTitle 
                title="Popular" 
                titleColor="Products" 
                shortDisc="Don't wait. The time will never be just right." 
            />

            {/* ✅ Responsive Grid */}
            <div 
                className="
                    grid 
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    xl:grid-cols-5 
                    gap-6
                "
            >
                {
                    productsData
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 5)
                    .map(product => (
                        <ProductsCard 
                            key={product.id} 
                            product={product} 
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Deal;
