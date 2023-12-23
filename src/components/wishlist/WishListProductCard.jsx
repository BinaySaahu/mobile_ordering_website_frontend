import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import CancelIcon from '@mui/icons-material/Cancel';
import { getDiscountedValue } from '../../utils/helper';
import { useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../store/slices/wishListSlice';

const WishListProductCard = ({data}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  return (
    <Link
        to={`/product/productDet`}
        state={{data:data}}
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer border relative z-[10]"
      >
        <div className='absolute right-0 top-0 z-[100]'><CancelIcon onClick = {()=>{ dispatch(removeFromWishlist({id:data._id})); navigate('/wishlist')}}/></div>
        <img src={data.thumbnail_image} alt="" className="w-full" />
        <div className="p-4 text-black/[0.9]">
          <div className="flex justify-between">
            <h2 className="text-lg font-medium">{data.name + "(" + data.color + "," + data.ROM + ")"}</h2>
            {/* {isWhishList && (
              <RiDeleteBin6Line
                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px] z-20"
                onClick={handleDelete}
              />
            )} */}
          </div>
          <div className="flex items-center text-black/[0.9]">
            <p className="mr-2 md:text-lg text-base font-semibold">{getDiscountedValue(data.price)}</p>
            <p className="md:text-base text-sm text-slate-400 font-medium line-through">
                {data.price}
            </p>
            <p className="ml-auto text-base font-medium text-green-500">
              20% off
            </p>
          </div>
        </div>
      </Link>
  )
}

export default WishListProductCard
