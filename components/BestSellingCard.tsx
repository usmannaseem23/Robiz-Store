import { Button } from "./ui/button";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

import React from "react";
import Link from "next/link";
import CardPopOver from "./CardPopOver";

const BestSellingCard = ({
  src,
  alt,
  title,
  description,
  price,
  category,
  product,
  discount,
}: {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
  category: string;
  product: string;
  discount: number;
}) => {
  return (
    <div className="max-w w-[350px] selection: h-[35rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${product}`}>
      {/* image div */}
      <div className="block  h-[23rem] rounded overflow-hidden">
        <Image src={src} alt="a" width={400} height={400} />
      </div>
      {/* typography */}
      <div className="mt-4">
        {title && (
          <h2 className="scroll-m-20 border-b pb-2 text-lg font-semibold tracking-tight first:mt-0 text-myBlackHead line-clamp-1">
            {title}
          </h2>
        )}
        {description && (
          <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-myBlackPara line-clamp-1">
            {description}
          </p>
        )}
        {price && (
          <div className="flex gap-3">
            <p className={`mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-myOrange/70"}`}>
            ${price}
          </p>
          {discount > 0 &&   <p className="mt-2 scroll-m-20 text-base font-semibold tracking-tight text-myBlackHead line-clamp-1">
            ${price - ((price * discount) / 100)}
          </p>}
          
          </div>
        )}
      </div>
      </Link>
      {/* button */}
      <div>
        <div className="absolute bottom-2 right-2">
          <CardPopOver product={product}/>
        </div>
        {/* <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
          <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Add to Cart
        </Button> */}
      
      <Link href={"/payements"}>
        <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2 left-2">
          <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
          Buy Now
        </Button>
        </Link>
        {discount > 0 && (
          <div className="scroll-m-20 text-xs font-semibold tracking-tight text-myWhite bg-myOrange absolute top-0 left-2 w-[87px] p-2 text-center uppercase rounded-tl-xl rounded-bl-xl myDiscount">{`${discount}% off`}</div>
        )}
      </div>
    </div>
  );
};

export default BestSellingCard;
