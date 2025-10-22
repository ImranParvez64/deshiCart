import Btn from "../../MiniComponents/Btn";
import { IoMdSearch } from "react-icons/io";


const LastHeader = () => {
    return (
        <div>
            <div className="container mx-auto py-3 flex justify-between items-center mb-2 ">
                <div>
                    <Btn  btnPrimary="All categories"></Btn>
                </div>
                <div className="flex justify-between items-center border border-gray-300 w-80 px-4 py-2 ">
                    <input type="text" className="placeholder:text-sm outline-none" placeholder="Search Product......" />
                    <IoMdSearch />
                </div>
                <div>
                    <Btn  btnPrimary="Dhaka"></Btn>
                </div>
            </div>
        </div>
    );
};

export default LastHeader;