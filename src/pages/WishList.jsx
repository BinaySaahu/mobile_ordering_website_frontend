import React from 'react'
import WishListProducts from '../components/wishlist/WishListProducts'
import { useSelector } from 'react-redux'

const WishList = () => {
  const {WishlistItems} = useSelector((state)=>state.wishlist)
  return (
    <div className="w-full md:py-20">
        <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
            <WishListProducts data = {WishlistItems}/>

        </div>
    </div>
  )
}

export default WishList
