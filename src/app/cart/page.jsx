"use client";
import React from "react";

const AddToCartPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 text-center">
        {/* Cart Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#16a34a"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386a.75.75 0 0 1 .728.568l.694 2.774m0 0L6.75 15.75h10.5l1.5-6.75H6.058m-.001 0L4.364 6.342m0 0L3.75 3.75M6.75 19.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm10.5 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-6">
          Looks like you haven’t added anything to your cart yet.
        </p>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
        >
          Add Products to Cart
        </button>

        {/* Continue Shopping */}
        <p className="mt-6 text-sm text-gray-500">
          Want to browse more items?{" "}
          <a href="/shop" className="text-green-600 font-medium hover:underline">
            Continue Shopping
          </a>
        </p>
      </div>
    </div>
  );
};

export default AddToCartPage;
