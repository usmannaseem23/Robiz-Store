import Image from "next/image";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Our Categories
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Category start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* category 1 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/dresses"}>
            <Image
              src={require("../public/pic/qwyt.webp")}
              alt="new"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
            <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">New Arrivals</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">New Arrivals</h1>
            </div>
          </Link>
        </div>
        {/* category 2 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shirts"}>
            <Image
              src={require("../public/pic/topsel.webp")}
              alt="men"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
           <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Men Formal</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Men Formal</h1>
            </div>
            
          </Link>
        </div>
        {/* category 3 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/t-shirts"}>
            <Image
              src={require("../public/pic/sum.webp")}
              alt="summer"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
               <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Summer Collection</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Summer Collection</h1>
            </div>
          </Link>
        </div>
        {/* category 4 */}
        <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
          <Link href={"/shoes-for-men"}>
            <Image
              src={require("../public/pic/trt.webp")}
              alt="shoes"
              width={350}
              height={350}
              className="rounded-xl duration-500 group-hover:scale-125"
            />
                <div className="hidden lg:block absolute -bottom-24 group-hover:bottom-0 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Shoes Collection</h1>
            </div>
            <div className="block lg:hidden absolute bottom-28 duration-500 z-[100] scroll-m-20 text-3xl font-extrabold tracking-tight  bg-myBlackHead/70 text-center text-myWhite w-full">
              <h1 className="uppercase">Shoes Collection</h1>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
