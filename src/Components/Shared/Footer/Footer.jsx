import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20 text-gray-700">
      <div className="max-w-7xl mx-auto py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-5xl mb-6 font-bold text-gray-900 flex items-center w-40">
          </h2>
          <p className="text-sm mb-5">
            Grabit is the biggest market of grocery products. <br />
            Get your daily needs from our store.
          </p>

        </div>

        {/* Category */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Category</h3>
          <ul className="space-y-2 text-sm">
            <li>Dairy & Milk</li>
            <li>Snack & Spice</li>
            <li>Fast Food</li>
            <li>Juice & Drinks</li>
            <li>Bakery</li>
            <li>Seafood</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Delivery</li>
            <li>Legal Notice</li>
            <li>Terms & conditions</li>
            <li>Secure payment</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start">
              <FaMapMarkerAlt />
              2548 Broaddus Maple Court, Madisonville KY 4783, USA.
            </li>
            <li className="flex gap-2 items-center">
              <FaPhoneAlt /> +00 1912300964
            </li>
            <li className="flex gap-2 items-center">
              <FaEnvelope /> shop.deshiCart@email.com
            </li>
          </ul>

          <div className="flex gap-3 mt-5">
            <FaFacebookF className="text-xl cursor-pointer hover:text-blue-600" />
            <FaTwitter className="text-xl cursor-pointer hover:text-blue-500" />
            <FaLinkedinIn className="text-xl cursor-pointer hover:text-blue-700" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-600" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-5 text-center text-sm">
        Copyright © DeshiCart all rights reserved. Powered by DeshiCart.
      </div>
    </footer>
  );
};

export default Footer;
