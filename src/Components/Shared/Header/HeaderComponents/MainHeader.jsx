"use client";
import Link from "next/link";
import { useState } from "react";
import { MdAddShoppingCart, MdLogin, MdManageAccounts, MdMenu, MdClose } from "react-icons/md";

const MainHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const menuItems = (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 lg:items-center font-semibold text-gray-600">
            <Link href='/'>Home</Link>
            <Link href='/categories'>Categories</Link>
            <Link href='/products'>Products</Link>
            <Link href='/blog'>Blog</Link>
            <Link href='/others'>Others</Link>
            <Link href='/contact'>Contact</Link>
        </div>
    );

    return (
        <div className="border-b border-gray-200">
            <div className="container mx-auto flex justify-between items-center h-20 font-semibold text-gray-600">

                {/* Logo */}
                <div>
                    <a href="/">
                        <img className="w-52 lg:w-60"
                            src="https://i.ibb.co.com/Mk3J0ckw/f3616df0-60c6-44ff-a7b2-1b5e3ee93173.png"
                            alt="logo"
                        />
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    {menuItems}
                </div>

                {/* Right Side Buttons */}
                <div className="flex gap-4 sm:gap-6">
                    <Link className="flex items-center gap-1 sm:gap-2" href='/login'>
                        <span className="hidden sm:block">Log in</span> <MdLogin className="text-lg" />
                    </Link>
                    <Link className="flex items-center gap-1 sm:gap-2" href='/register'>
                        <span className="hidden sm:block">Register</span>
                        <MdManageAccounts className="text-xl" />
                    </Link>
                    <Link className="flex items-center gap-1 sm:gap-2" href='/cart'>
                        <span className="hidden sm:block">Cart</span> <MdAddShoppingCart className="text-lg" />
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        {openMenu ? <MdClose /> : <MdMenu />}
                    </button>
                </div>

            </div>

            {/* Mobile Menu Dropdown */}
            {openMenu &&
                <div className="bg-white shadow-md border-t p-4 lg:hidden">
                    {menuItems}
                </div>
            }

        </div>
    );
};

export default MainHeader;
