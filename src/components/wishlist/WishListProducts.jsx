import React from "react";
import WishListProductCard from "./WishListProductCard";

const WishListProducts = ({data}) => {
  return (
    <>
      <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
        <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Your Wishlist
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {data.map((d,i)=>(

            <WishListProductCard data = {d} key={i}/>
        ))}
      </div>
    </>
  );
};

export default WishListProducts;
