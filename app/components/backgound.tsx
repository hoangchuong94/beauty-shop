import React from "react";
import bgHome from "/public/static/background-home.jpg";
import Image from "next/image";

const Background = () => {
  return (
    <div className="relative min-h-[420px] sm:min-h-[420px] md:min-h-[500px] lg:min-h-[540px] xl:min-h-[700px] 2xl:min-h-[1080px]">
      <div
        className=" absolute inset-0 hidden bg-cover bg-fixed bg-center bg-no-repeat md:block"
        style={{
          backgroundImage: `url(${bgHome.src})`,
        }}
      ></div>
      <Image
        className="object-cover"
        src={bgHome}
        alt="background home"
        fill
        priority
      />
      <div className="from-back-500 absolute inset-0 z-0 bg-gradient-to-b to-white opacity-50"></div>
      <div className="relative mx-auto flex min-h-[inherit] max-w-[80%]">
        <div className="flex min-h-[inherit] items-center justify-center">
          <div className="flex min-h-[inherit] w-full flex-col items-center justify-center py-7 text-white">
            <h1 className="text-center text-2xl">
              Raining Offers For Hot Summer!
            </h1>
            <h3 className=" mb-4 mt-2 text-center text-base">
              25% Off On All Products
            </h3>
            <div className="flex ">
              <button
                className="mr-2 bg-slate-50 px-4 py-2 text-xs text-black hover:bg-black hover:text-white hover:delay-100"
                type="button"
              >
                SHOP NOW
              </button>
              <button
                className="border border-white bg-transparent px-4 py-2 text-xs text-white hover:bg-white hover:text-black hover:delay-100"
                type="button"
              >
                FIND MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
