import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";


const TopHeader = () => {
    return (
      <div className="bg-[#2E4B45]">
          <div className="container mx-auto ">
            <div className="flex justify-between text-sm text-medium items-center py-2 text-white">
                <div className="flex gap-4">
                    <p className="flex items-center justify-center gap-2"><FaPhone /> 01602-390164</p>
                    <p className="flex items-center justify-center gap-2"><FaWhatsapp /> 01912-300964</p>
                </div>
                <div>
                    <p>DeshiCart – Bangladesh’s Smartest Shopping Spot</p>
                </div>
                <div className="flex gap-4">
                    <Link href='/help'>Help</Link>
                    <Link href='/track'>Track Order</Link>
                    <div className="flex">
                        <Link href='/' className="flex justify-center items-center">English<MdKeyboardArrowDown /></Link>
                    </div>
                    <div className="flex">
                        <Link href='/' className="flex justify-center items-center">Taka<MdKeyboardArrowDown /></Link>
                    </div>

                </div>
            </div>
        </div>
      </div>

    );
};

export default TopHeader;