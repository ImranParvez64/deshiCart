"use client";
import React, { useState } from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt, FaHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  // ⭐ রেটিং দেখানোর ফাংশন
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div
      className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ---------- Product Image ---------- */}
      <div className="relative overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-full h-60 object-cover cursor-pointer transition-transform duration-500 hover:scale-105"
        />

        {/* ---------- Hover Icons ---------- */}
        <div
          className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaHeart className="text-gray-600 hover:text-red-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaSearch className="text-gray-600 hover:text-blue-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaShoppingCart className="text-gray-600 hover:text-green-500" />
          </button>
        </div>

        {/* ---------- SALE / NEW Badge (Optional) ---------- */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded ${
              product.badge === "SALE"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* ---------- Product Info ---------- */}
      <div className="p-5 space-y-3 text-start">
        <p className="text-gray-400 font-medium">{product.category}</p>
        <h1 className="text-xl text-gray-700 font-semibold cursor-pointer">{product.title}</h1>

        {/* ⭐ Rating */}
        <div className="flex items-center  gap-1">
          {renderStars(product.rating)}
          <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
        </div>

        {/* 💰 Price */}
        <div className="flex gap-2 items-center ">
          <p className="text-lg font-semibold text-gray-800">${product.discountPrice}</p>
          <p className="line-through text-red-600">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
