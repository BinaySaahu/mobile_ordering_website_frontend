import React, { useMemo } from "react";
import CartItem from "../components/cart/CartItem";
import { useSelector } from "react-redux";
import NotloggedIn from "../components/NotloggedIn";
import NoItems from "../components/NoItems";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const User = useSelector((state) => state.user);
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, val) => total + parseInt(val.selectedQuantityPrice),
      0
    );
  }, [cartItems]);
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        {User.isLoggedIn ? (
          cartItems.length !==0?
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
              <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight">
                Shopping Cart
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              {/* cart left */}
              <div className="flex-[2]">
                <div className="text-lg font-bold bg-gray-200 p-3 rounded-sm">
                  Your Cart ({cartItems.length})
                </div>
                {cartItems.map((item, i) => (
                  <CartItem data={item} key={i} />
                ))}
              </div>
              {/* cart right */}
              <div className="flex-[1]">
                <div className="p-5 my-5 bg-black/[0.4] rounded-xl text-white">
                  <div className="text-lg font-bold text-white">Summary</div>
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-white">
                      SUBTOTAL
                    </div>
                    <div className="text-md md:text-lg font-medium text-white">
                      ${subtotal}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-white">
                      Shipping charge
                    </div>
                    <div className="text-md md:text-lg font-medium text-white">
                      ${cartItems.length === 0 ? 0 : 150}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-white">
                      Total
                    </div>
                    <div className="text-md md:text-lg font-medium text-white">
                      ${cartItems.length === 0 ? 0 : subtotal + 150}
                    </div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5 text-white">
                    The subtotal reflects the total price of your order,
                    including duties and taxes, before any applicable discounts.
                    It does not include delivery costs and international
                    transaction fees.
                  </div>
                </div>
                <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center">
                  Checkout
                </button>
              </div>
            </div>
          </>
          :
          <NoItems category={"Cart"}/>
        ) : (
          <NotloggedIn />
        )}
        {/* Heading */}
      </div>
    </div>
  );
};

export default Cart;
