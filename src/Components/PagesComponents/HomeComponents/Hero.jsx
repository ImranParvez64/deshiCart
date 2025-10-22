import Btn from '@/Components/Shared/MiniComponents/Btn';
import "./CSS/others.css";

const Hero = () => {
    return (
        <div className=''>
            <div className='bg-banner container mx-auto text-white'>
                <div className="overly">
                </div>
                <div className='flex flex-col justify-center items-center z-10 space-y-3'>
                    <p className='text-2xl font-medium italic'>It has finally started</p>
                    <h1 className='text-6xl font-semibold btn-primary'>Big Summer sale</h1>
                    <button className='btn btn-accent text-2xl px-12'>Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;