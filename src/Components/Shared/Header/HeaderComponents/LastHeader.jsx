"use client";
import { useState, useEffect, useRef } from "react";
import Btn from "../../MiniComponents/Btn";
import { IoMdSearch } from "react-icons/io";

const LastHeader = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDivision, setSelectedDivision] = useState("Dhaka");
  const [searchText, setSearchText] = useState("");

  const [categoryOpen, setCategoryOpen] = useState(false);
  const [divisionOpen, setDivisionOpen] = useState(false);

  const categoryRef = useRef(null);
  const divisionRef = useRef(null);

  const divisions = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh"
  ];

  // ✅ Fetch Category
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await fetch("http://localhost:4000/category");
      const data = await res.json();
      setCategories(data);
    };
    fetchCategory();
  }, []);

  // ✅ Close Dropdown Outside Click
  useEffect(() => {
    const handler = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) setCategoryOpen(false);
      if (divisionRef.current && !divisionRef.current.contains(e.target)) setDivisionOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // ✅ Search Feature
  const handleSearch = () => {
    if (!searchText.trim()) return;
    console.log("Search:", searchText);
    console.log("Category:", selectedCategory || "All");
    console.log("Division:", selectedDivision);
  };

  return (
    <div className="container mx-auto py-3 mb-3 px-3">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-3">

        {/* ✅ All Categories */}
        <div className="relative w-full md:w-auto" ref={categoryRef}>
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="w-full md:w-52 lg:w-60"
          >
            <Btn btnPrimary={selectedCategory || "All Categories"} />
          </button>

          {categoryOpen && (
            <ul className="absolute left-0 top-full bg-white shadow-md border
            w-full md:w-52 lg:w-60 mt-1 rounded-md z-50 max-h-60 overflow-auto">
              <li
                className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedCategory(null);
                  setCategoryOpen(false);
                }}
              >
                All Categories
              </li>

              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.name);
                    setCategoryOpen(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ✅ Search Box */}
        <div className="w-full md:w-80 flex items-center border border-gray-400 bg-white rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search product..."
            className="placeholder:text-sm px-3 py-2 outline-none w-full"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="px-3 py-2 hover:bg-gray-200 transition"
          >
            <IoMdSearch size={20} />
          </button>
        </div>

        {/* ✅ Division */}
        <div className="relative w-full md:w-auto" ref={divisionRef}>
          <button
            onClick={() => setDivisionOpen(!divisionOpen)}
            className="w-full md:w-52 lg:w-60"
          >
            <Btn btnPrimary={selectedDivision} />
          </button>

          {divisionOpen && (
            <ul className="absolute right-0 top-full bg-white shadow-md border
            w-full md:w-52 lg:w-60 mt-1 rounded-md z-50 max-h-60 overflow-auto">
              {divisions.map((division, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedDivision(division);
                    setDivisionOpen(false);
                  }}
                  className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                >
                  {division}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
};

export default LastHeader;
