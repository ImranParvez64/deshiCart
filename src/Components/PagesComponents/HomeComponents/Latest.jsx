import React from "react";

const Latest = () => {
  return (
    <div className="my-10">
      <div className="
        relative 
        rounded-sm 
        h-[350px] 
        sm:h-[420px] 
        lg:h-[500px] 
        bg-cover bg-center 
        flex items-center justify-end 
        px-4 sm:px-10 lg:px-20 
        text-white
        bg-[url('https://maraviyainfotech.com/projects/grabit-tailwind/grabit-tailwind/assets/img/banner/11.jpg')]
      ">

        {/* ✅ Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30 rounded-sm"></div>

        {/* ✅ Text content */}
        <div className="relative text-right space-y-2 sm:space-y-4">
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold">
            30% Off Sale
          </p>

          <h1 className="
            text-3xl sm:text-5xl lg:text-6xl 
            font-extrabold 
            leading-tight
          ">
            Latest Exclusive <br className="hidden sm:block" />
            Summer Collection
          </h1>

          <button className="
            btn btn-accent 
            w-28 sm:w-36 lg:w-44 
            text-sm sm:text-[17px] 
            mt-2
          ">
            Shop Now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Latest;
