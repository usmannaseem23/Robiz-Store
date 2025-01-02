"use client";
import { Button } from "../../../../components/ui/button";
import { FaHeart, FaMinus, FaPlus } from "react-icons/fa";
import ProductComponent from "../../../../components/ProductComponent";
import { useAppSelector } from "../../store/hooks";
import NotFound from "@/app/not-found";
import { useState } from "react";
import CardToast from "../../../../components/CardToast";
 

const ProPage = ({ params }: { params: { product: string } }) => {
  const sl = useAppSelector((state) => state.products);
  const product = sl.filter((val) => val.product == params.product);

  const [cartItems, setCartItems] = useState({
    id:  product[0].id,
    title:  product[0].title,
    image: product[0].image,
    product: product[0].product,
    price:  product[0].price,
    discount: product[0].discount,
    category:  product[0].category,
    size:  product[0].size,
    qty:  product[0].qty,
    color: product[0].color[0],
  })

  return (
    <div>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://dummyimage.com/400x400"
          /> */}
          <ProductComponent image={product[0].image} />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className=" text-gray-500 uppercase tracking-widest scroll-m-20 text-sm font-semibold">
              {product[0].category}
            </h2>
            <h1 className="mt-2 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
              {product[0].title}
            </h1>
            <div className="rating rating-sm mt-2">
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
              <input
                type="radio"
                name="rating-6"
                className="mask mask-star-2 bg-myOrange"
              />
            </div>
            <p className="mt-2 leading-relaxed scroll-m-20 text-base font-normal text-myBlackPara">
              {product[0].description}
            </p>
            <div className="flex mt-6 items-center mb-5">
              <div className="flex-shrink-0 mr-3">
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  Color
                </span>
                {product[0].color.map((item, i) => (
                  <button
                    key={i}
                    onClick={()=>setCartItems({...cartItems, color: item})}
                    className="border-2 border-gray-300 mr-1  rounded-full w-6 h-6 focus:outline-none active:border-black focus:border-black"
                    style={{ backgroundColor: item }}
                  />
                ))}
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                  Size
                </span>
                <div className="relative flex-grow">
                  <div className="form-control w-full max-w-xs">
                    <select
                    onChange={(e)=>setCartItems({...cartItems, size: [e.target.value]})}
                      className="select select-bordered w-full"
                      defaultValue=""
                    >
                      <option disabled value="">
                        Select Size
                      </option>
                      {product[0].size.map((item, i) => (
                        <option key={i} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 scroll-m-20 text-base text-myBlackHead font-semibold tracking-tight">
                Quantity
              </span>
              <Button onClick={()=>setCartItems({...cartItems, qty: cartItems.qty <= 1 ? 1 : --cartItems.qty})} className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaMinus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Less
              </Button>
              <div className="mr-2 ml-2 scroll-m-20 text-base font-semibold tracking-tight">
                {cartItems.qty}
              </div>
              <Button onClick={()=>setCartItems({...cartItems, qty: ++cartItems.qty})}
               className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl w-fit h-fit">
                <FaPlus className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add
              </Button>
            </div>
            <div className="divider"></div>
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead  
              ${
                cartItems.discount > 0 &&
                "line-through decoration-2 decoration-myOrange/70"
              }`}
                >
                  ${cartItems.price * cartItems.qty}
                </span>

                {cartItems.discount > 0 && (
                  <span className="ml-3 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackHead">
                    $
                   {(cartItems.price - (cartItems.price * cartItems.discount) / 100)* cartItems.qty}
                  </span>
                )}
              </div>
              {/* <Button onClick={()=>disPatch(addToCart(cartItems))} className="group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                <FaShoppingCart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
                Add to Cart
              </Button> */}
              <CardToast cartItems={cartItems}/>
            </div>
            <Button className="mt-3 w-full group bg-myBlackHead hover:bg-transparent text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
              <FaHeart className="mr-2 h-4 w-4 group-hover:text-myOrange duration-300" />
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProPage;
