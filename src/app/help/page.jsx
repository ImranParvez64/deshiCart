"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const HelpPage = () => {
  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order by going to your account dashboard and clicking on 'Track Order'."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept bKash, Nagad, Rocket, Debit/Credit Cards, and Cash on Delivery."
    },
    {
      question: "How can I return or exchange a product?",
      answer: "Simply go to 'My Orders', select the product, and click on 'Return/Exchange'. Follow the steps to complete the process."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can contact us via phone, email, or our social media pages listed below."
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Help & Support</h2>
      <p className="text-center text-gray-600 mb-10">
        Find answers to common questions or reach out to us directly.
      </p>

      {/* FAQ Section */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm p-5 hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="mt-12 border-t pt-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-600">
          <p className="flex items-center gap-2"><FaPhoneAlt /> +880 1610-123456</p>
          <p className="flex items-center gap-2"><FaEnvelope /> support@deshicart.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> Dhaka, Bangladesh</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="mt-10 flex justify-center gap-5">
        <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
          <FaFacebookF />
        </a>
        <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
          <FaTwitter />
        </a>
        <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-green-500 hover:text-white transition">
          <FaInstagram />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-sm text-gray-500 mt-6">
        © 2025 DeshiCart — All rights reserved.
      </p>
    </div>
  );
};

export default HelpPage;
