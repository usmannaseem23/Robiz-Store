"use client"

import React from "react";
import BestSellingCard from "./BestSellingCard";
import { useAppSelector } from "@/app/store/hooks";
 

const BestSelling = () => {
  const pro = useAppSelector((state) => state.products)
  const bestSell = pro.slice(0, 3)
  // const bestSell = [
  //   {
  //     src: "/pic/bs1.webp",
  //     alt: "Polo",
  //     title: "Black Polo",
  //     description: "Best quality t-shirt for men",
  //     price: 20,
  //     category: "polos",
  //     product: "black-polo",
  //     discount: 10
  //   },
  //   {
  //     src: "/pic/topswomen.webp",
  //     alt: "tops",
  //     title: "Loose-Fit Gingham Top",
  //     description:
  //       "Loose-fit gingham top with round neckline and voluminous long sleeves. Drawcord detail on neckline.",
  //     price: 49,
  //     category: "tops",
  //     product: "loose-fit",
  //     discount: 10
  //   },
  //   {
  //     src: "/pic/sli.jpg",
  //     alt: "slippers",
  //     title: "Brown men's slippers",
  //     description:
  //       "Crafted with quality materials, these slippers provide a snug fit and ultimate support for tired feet. ",
  //     price: 32,
  //     category: "shoes-for-men",
  //     product: "men-slippers",
  //     discount: 10
  //   },
  // ];
  return (
    <div className="mb-[100px] mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl">
          Best Selling Products
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* start */}
      <div className="flex flex-wrap justify-center gap-5">
        {bestSell.map((items: any, i) => (
          <BestSellingCard
            key={i}
            src={items.image[0]}
            alt={items.title}
            title={items.title}
            description={items.description}
            price={items.price}
            category={items.category}
            product={items.product}
            discount={items.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSelling;
