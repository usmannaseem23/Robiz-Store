"use client"
import { Button } from "../../../components/ui/button";
import CartCard from "../../../components/CartCard";
import { useAppSelector } from "../store/hooks";
import Link from "next/link";

const CartPage = () => {
  const cartArray = useAppSelector((state) => state.cart);
  const total = cartArray.reduce(
    (total, arra) => total + arra.price * arra.qty,
    0
  );

  // Split the URL and dynamic total
  const url = "/payements";  // Static URL
  const queryParams = `?total=${total}`;  // Dynamic query params

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1">
      {/* item */}
      <div className="col-span-2">
        <CartCard />
      </div>

      {/* summary */}
      <div className="bg-myBlackHead/5 p-5 rounded-xl">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-myBlackHead">
          order summary
        </h2>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* pricing */}
        <div className="text-sm font-medium tracking-tight text-myBlackPara">
          {/* product price */}
          <div className="flex items-center justify-between capitalize">
            <h2>sub total</h2>
            <h2>${total}</h2>
          </div>
          {/* delivery charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>Delivery Charges</h2>
            <h2>TBD</h2>
          </div>
          {/* service charges */}
          <div className="flex items-center justify-between capitalize">
            <h2>Sales Tax</h2>
            <h2>TBD</h2>
          </div>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* estimated total */}
        <div className="flex items-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackHead">
          <h2>Estimated total</h2>
          <h2>${total}</h2>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* button */}
        <div className="flex items-center justify-center w-full">
          <Link href={`${url}${queryParams}`} passHref>
            <Button className="bg-myBlackHead hover:bg-transparent duration-300 text-myWhite hover:text-myBlackHead scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl">
              Proceed to checkout
            </Button>
          </Link>
        </div>
        {/* divider */}
        <div className="divider mt-0 mb-1"></div>
        {/* divider */}
        <p className="text-xs font-semibold text-myBlackHead w-[97%] text-center italic">
          {`* Delivery Charges and the Sales Tax will be calculated in the Checkout page`}
        </p>
      </div>
    </div>
  );
};

export default CartPage;
