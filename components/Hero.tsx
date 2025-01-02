import React from "react";
import { Button } from "./ui/button";
import { AiFillShopping } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="mb-[100px]">
      <div
        className="hero min-h-[80vh] custom-img ">
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">Future<span className="text-myOrange"> Fashion</span> Now</h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">
            Discover trendsetting apparel. From chic tops and stylish pants to dazzling accessories and shoes, stay ahead in fashion.
            </p>
            <Button className="outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange">
      <AiFillShopping className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce" />Shop Now
    </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
