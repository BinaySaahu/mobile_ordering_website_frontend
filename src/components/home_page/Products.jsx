import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loader from "../Loader";

const Products = ({ products, load }) => {
  return (
    <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
      {load ? (
        <div className="flex flex-col items-center justify-center">
          <Loader
            primaryColor="#000000"
            secondaryColor="#e0e0e0"
            height={50}
            width={50}
          />
          <p className="md:text-[12px] text-[10px] text-[#bcbcbc]">
            Loading the products...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          {products.map((product, idx) => (
            <ProductCard key={idx} prodDet={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
