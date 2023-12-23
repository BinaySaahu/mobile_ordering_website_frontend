import React from "react";
import ProductDetailsCrousel from "../components/product/ProductDetailsCrousel";
import { useLocation } from "react-router-dom";
import { addToCart } from "../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../store/slices/wishListSlice";
import toast, { Toaster } from "react-hot-toast";

const ProductDetails = () => {
  const User = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location);
  const state = location.state?.data;
  console.log(state);
  const addItemToCart = async () => {
    if(User.isLoggedIn){
      const selectedQuantityPrice = parseInt(state.price.slice(1));
      dispatch(
        addToCart({
          ...state,
          selectedQuantityPrice: selectedQuantityPrice,
        })
      );

    }else{
      toast.error("Please log in to add items to wishlist")
    }
  };
  const addItemToWishList = async () => {
    // console.log(cart.cartItems)
    if (User.isLoggedIn) {
      dispatch(
        addToWishlist({
          ...state,
        })
      );
    } else {
      toast.error("Please log in to add items to wishlist")
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* Left col start */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] md:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCrousel images={state.secondary_images} />
          </div>
          {/* Left col end */}
          {/* Right col start */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-tight">
              {state.name}
            </div>
            <div className="text-lg mb-5 font-semibold">{state.subtitle}</div>
            {/* Product price */}
            <div className="text-lg font-semibold">MRP: {state.price}</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl of all taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {"(Also includes all applicable duties)"}
            </div>
            {/* product size start */}
            <div className="mb-10 flex flex-col items-start gap-5">
              <div>
                <p className="md:text-[20px] text-[15px] font-extrabold">
                  Specification
                </p>
              </div>
              <div className="flex items-center gap-5">
                <span className="font-semibold">
                  Storage:{" "}
                  <span className="font-normal text-slate-400">
                    {state.ROM}
                  </span>
                </span>
                <span className="font-semibold">Color: </span>
                <span className=" font-normal text-slate-400">
                  {state.color}
                </span>
              </div>
            </div>
            {/* product size end */}
            <button
              className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-90 mb-3 hover:opacity-75"
              onClick={addItemToCart}
            >
              Add to Cart
            </button>
            <button
              className="w-full py-4 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-90 mb-10 hover:opacity-75 flex justify-center items-center gap-2 border border-black"
              onClick={addItemToWishList}
            >
              Wishlist
            </button>
            <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">{state.description}</div>
            </div>
          </div>
          {/* Right col end */}
        </div>
        {/* <RelatedProducts /> */}
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
