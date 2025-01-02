"use client";

import BestSellingCard from "../../../components/BestSellingCard";
import { useAppSelector } from "../store/hooks";

const CataPage = ({ params }: { params: { category: string } }) => {
  const product = useAppSelector((state) => state.products);
  const bestSell = product.filter((val) => val.category == params.category);
  return (
    <div>
      <div className="text-center mb-10">
        <h1 className="text-myBlackHead scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl capitalize">
          {params.category}
        </h1>
        <div className="flex mt-2 justify-center">
          <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
        </div>
      </div>
      {/* Category start */}

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

export default CataPage;
