
import React from "react";
import empty from '../assets/empty-cart.jpg'

const NotloggedIn = () => {
  return (
    <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
      <img
        src={empty}
        width={300}
        height={300}
        className="w-[300px] md:w-[400px]"
      />
      <span className="text-xl font-bold">Not logged in</span>
      <span className="text-center mt-4">
        Looks like you have not logged in please login to add items to your
        wishlist.
        <br />
        Go ahead and explore top categories.
      </span>
    </div>
  );
};

export default NotloggedIn;
