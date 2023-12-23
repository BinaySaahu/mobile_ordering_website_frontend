import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../../store/slices/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch()
  const updateCartItem = async (e,key)=>{
    var payload = {
      key,
      val: key == "quantity"?parseInt(e.target.value):e.target.value,
      id:data._id
    }
    dispatch(updateCart(payload));
  }
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b border-t mt-5">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src={data.thumbnail_image} alt="" height={120} width={120}></img>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {data.name + "(" + data.color + "," + data.ROM + ")"}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {data.subtitle}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block mt-2">
            MRP : {data.price}
          </div>
        </div>
        <div className="text-sm md:text-md font-medium text-black/[0.5] md:block hidden">
          {data.subtitle}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Variants:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "selectedVariant")}
              >
                {data.variants_available.map((v, i) => {
                  return (<option
                    value={v.storage}
                    key={i}
                    selected={v.storage === data.ROM}
                  >
                    {v.storage}
                  </option>)
                })}
              </select>
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Quantity:</div>
              <select
                className="hover:text-black"
                onChange={(e) => updateCartItem(e, "quantity")}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((q, i) => {
                  return (
                    <option value={q} key={i} selected={q === data.quantity}>
                      {q}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <DeleteIcon className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]" onClick = {()=>dispatch(removeFromCart(data._id))}/>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
