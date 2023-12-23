import React from "react";
import { Link } from "react-router-dom";
import { getDiscountedValue } from "../../utils/helper";

const ProductCard = ({ prodDet }) => {
  return (
    <>
      <Link
        to="/product/productDet"
        state={{ data: prodDet }}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
      >
        <img
          src={prodDet?.thumbnail_image}
          alt=""
          className="w-full h-[300px] object-contain"
        />
        <div className="p-4 text-black/[0.9]">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium">
              {prodDet?.name + "(" + prodDet.color + "," + prodDet.ROM + ")"}
            </h2>
            {/* {isWhishList && (
              <RiDeleteBin6Line
                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px] z-20"
                onClick={handleDelete}
              />
            )} */}
          </div>
          <div className="flex items-center text-black/[0.9]">
            <p className="mr-2 md:text-lg text-base font-semibold">
              ${getDiscountedValue(prodDet?.price)}
            </p>
            <p className="md:text-base text-sm text-slate-400 font-medium line-through">
              {prodDet?.price}
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
