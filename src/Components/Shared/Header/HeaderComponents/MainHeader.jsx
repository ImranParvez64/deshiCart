import Link from "next/link";
import { MdAddShoppingCart, MdLogin, MdManageAccounts } from "react-icons/md";

const MainHeader = () => {
    return (
        <div className="border-b border-gray-200">
            <div className="flex justify-between items-center h-20  overflow-hidden container mx-auto font-semibold text-gray-600">
                <div>
                    <a href="/"><img className="w-60
                    " src="https://i.ibb.co.com/Mk3J0ckw/f3616df0-60c6-44ff-a7b2-1b5e3ee93173.png" alt="" /></a>
                </div>
                <div className="flex gap-8">
                    <Link href='/'>Home</Link>
                    <Link href='/categories'>Categories</Link>
                    <Link href='/products'>Products</Link>
                    <Link href='/blog'>Blog</Link>
                    <Link href='/others'>Others</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
                <div className="flex gap-6">
                    <Link className="flex justify-center items-center gap-2" href='/login'>Log in <MdLogin /></Link>
                    <Link className="flex justify-center items-center gap-2" href='/register'>Register <MdManageAccounts className="text-xl" /></Link>
                    <Link className="flex justify-center items-center gap-2" href='/cart'>Cart <MdAddShoppingCart /></Link>

                </div>
            </div>
        </div>
    );
};

export default MainHeader;