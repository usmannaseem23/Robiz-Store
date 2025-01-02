"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CardPopOver = ({ product }: { product: string }) => {
  const sl = useAppSelector((state) => state.products).find(
    (val) => val.product == product
  );
  const disPatch = useAppDispatch();
  const [cartItems, setCartItems] = useState({
    id: sl?.id,
    title: sl?.title,
    image: sl?.image,
    product: sl?.product,
    price: sl?.price,
    discount: sl?.discount,
    category: sl?.category,
    size: sl?.size,
    qty: sl?.qty,
    color: sl?.color[0],
  });
  const notify = () =>
    toast.success("Product Added Successfuly", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  return (
    <div >
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl ">
            <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
            Add to Cart
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[15rem] bg-myWhite shadow-myBlackPara/40 rounded-xl">
          <div className="flex items-center">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Size
            </span>
            <div className="relative flex-grow">
              <div className="form-control w-full max-w-xs">
                <select
                  onChange={(e) =>
                    setCartItems({ ...cartItems, size: [e.target.value] })
                  }
                  className="select select-bordered w-full bg-myWhite"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select Size
                  </option>
                  {sl?.size.map((item, i) => (
                    <option key={i}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="flex- mt-5">
            <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
              Color
            </span>
            {sl?.color.map((item, i) => (
              <button
                key={i}
                onClick={() => setCartItems({ ...cartItems, color: item })}
                className="border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                style={{ backgroundColor: item }}
              />
            ))}
          </div>
          <div className="w-fit" onClick={notify}>
            <Button
              onClick={() => disPatch(addToCart(cartItems))}
              className="group mt-5 w-full bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl "
            >
              <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Add to Cart
            </Button>
          </div>
        </PopoverContent>
      </Popover>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default CardPopOver;
