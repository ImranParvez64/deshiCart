import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const TopHeader = () => {
    return (
        <div className="bg-[#2E4B45] text-white text-sm">
            <div className="container mx-auto">
                <div className="
                    flex flex-col lg:flex-row
                    justify-between items-center
                    gap-2 lg:gap-0 py-2
                ">

                    {/* Contact */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <p className="flex items-center gap-2"><FaPhone /> 01602-390164</p>
                        <p className="flex items-center gap-2"><FaWhatsapp /> 01912-300964</p>
                    </div>

                    {/* Tagline */}
                    <div className="hidden sm:block text-center">
                        <p>DeshiCart – Bangladesh’s Smartest Shopping Spot</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center lg:justify-end gap-4">
                        <Link href='/help'>Help</Link>
                        <Link href='/track'>Track Order</Link>

                        {/* Language */}
                        <button className="flex items-center">
                            English <MdKeyboardArrowDown />
                        </button>

                        {/* Currency */}
                        <button className="flex items-center">
                            Taka <MdKeyboardArrowDown />
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopHeader;
