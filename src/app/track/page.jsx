"use client";
import React from "react";

const TrackOrder = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Track Your Order
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Enter your Order ID and email to check your delivery status.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Order ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order ID*
            </label>
            <input
              type="text"
              placeholder="Enter your Order ID"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:outline-none"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition font-medium"
          >
            Track Order
          </button>
        </form>

        {/* Result Section */}
        <div className="mt-8 text-center border-t pt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Need Help?</h3>
          <p className="text-sm text-gray-500 mb-4">
            Contact our support team if you face any issue.
          </p>

          <div className="flex justify-center space-x-6 text-gray-600">
            <a
              href="#"
              className="hover:text-green-600 transition text-sm"
            >
              📞 +880 1610-123456
            </a>
            <a
              href="#"
              className="hover:text-green-600 transition text-sm"
            >
              ✉️ support@deshicart.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
