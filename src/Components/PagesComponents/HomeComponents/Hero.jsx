import Btn from '@/Components/Shared/MiniComponents/Btn';
import "./CSS/others.css";

const Hero = () => {
    return (
        <div className="container mx-auto mb-10 px-2">
            <div className="bg-banner bg-cover bg-center rounded-sm relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[520px] flex justify-center items-center text-white overflow-hidden">

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative z-20 text-center space-y-3 px-3">
                    <p className="text-lg sm:text-xl md:text-2xl font-medium italic">
                        It has finally started
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold">
                        Big Summer Sale
                    </h1>
                    <button className="btn btn-accent text-base sm:text-lg md:text-2xl px-6 sm:px-10 md:px-12">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
