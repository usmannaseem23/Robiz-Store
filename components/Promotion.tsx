import React from "react";

const Promotion = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Promotions
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Promotion start */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* first */}
        <div className="hero h-[25rem] promoOne rounded-xl">
          <div className="hero-overlay bg-opacity-65 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">
                Get upto <span className="text-myOrange">60%</span> off
              </h1>
              <p className="scroll-m-20 mt-2 text-base font-medium text-myWhite tracking-tight">
                Flash Sale, get upto 60% off on the Season Variant.
              </p>
            </div>
          </div>
        </div>
        {/* second */}
        <div className="hero h-[25rem] promoTwo rounded-xl">
          <div className="hero-overlay bg-opacity-65 rounded-xl"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight uppercase text-myWhite">
                Get upto <span className="text-myOrange">30%</span> off
              </h1>
              <p className="scroll-m-20 mt-2 text-base font-medium text-myWhite tracking-tight">
                Flash Sale, get upto 30% off on the New Arrival.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
