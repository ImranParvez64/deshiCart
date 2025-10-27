import React from "react";

const page = async ({ params }) => {
    const res = await fetch(`http://localhost:4000/products/${params.id}`);
    const product = await res.json();


    const firstValues = Object.values(product.specifications)[0];
    const secondValues = Object.values(product.specifications)[1];
    const thirdValues  = Object.values(product.specifications)[2];
    const forthValues  = Object.values(product.specifications)[3];

    const firstKeys = Object.keys(product.specifications)[0];
    const secondKeys = Object.keys(product.specifications)[1];
    const thirdKeys = Object.keys(product.specifications)[2];
    const forthKeys = Object.keys(product.specifications)[3];
    return(
        <div className="flex gap-10 mx-auto container py-16">
            {/* Product Image */}
            <div>
                <img className="w-115 p-20 border-1 border-gray-200 rounded-lg" src={product.img} alt={product.title} />
            </div>

            {/* Product Details */}
            <div>
                <h1 className="text-5xl font-semibold text-gray-800 mb-5">{product.title}</h1>

                {/* ✅ Rating */}
                {/* ⭐ Dynamic Rating Stars */}
                <div className="flex items-center gap-2 mb-5">
                    {Array.from({ length: 5 }, (_, index) => {
                        const starValue = index + 1;
                        return (
                            <span key={index} className="text-yellow-500 text-2xl">
                                {product.rating >= starValue
                                    ? "★"
                                    : product.rating >= starValue - 0.5
                                        ? "⯨"  // Half star look (if you want you can add icon library later)
                                        : "☆"}
                            </span>
                        );
                    })}

                    <p className="text-lg font-medium text-gray-600">
                        {product.rating} / 5
                    </p>
                </div>


                {/* Price */}
                <div className="flex justify-between">
                    <div>
                        <p className="text-xl font-bold text-gray-700 mb-3">
                            $ {product.discountPrice}
                        </p>
                        <p className="line-through text-gray-400 text-lg">
                            MRP: $ {product.price}
                        </p>
                    </div>
                    <div>
                        <p className="text-teal-500 font-semibold">In stock</p>
                    </div>
                </div>

                {/* Short Description */}
                <p className="text-gray-600">{product.fullDesc}</p>
                <p className="text-2xl mt-4 font-semibold">Specifications</p>
                <ul className="list-disc pl-4 mt-4">
                    <li><span className="capitalize">{firstKeys}</span> : {firstValues}</li>
                    <li><span className="capitalize">{secondKeys}</span> : {secondValues}</li>
                    <li><span className="capitalize">{thirdKeys}</span>: {thirdValues}</li>
                    <li><span className="capitalize">{forthKeys}</span> : {forthValues}</li>
                    
                </ul>
                <div className="flex justify-start mt-6 items-center gap-6">
                    <button className="btn text-white px-10 bg-[#4B5966]">Add to cart</button>
                <button className="btn text-white px-10 bg-[#5CAF90]">Buy now</button>
                </div>
            </div>
        </div>
    );
};

export default page;
