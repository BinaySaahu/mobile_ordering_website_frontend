import React from 'react'
import WishListProducts from '../components/wishlist/WishListProducts'
import { useSelector } from 'react-redux'
import NotloggedIn from '../components/NotloggedIn'
import NoItems from '../components/NoItems'

const WishList = () => {
  const {WishlistItems} = useSelector((state)=>state.wishlist)
  const User = useSelector((state)=>state.user);
  return (
    <div className="w-full md:py-20">
        <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
          {User.isLoggedIn?(WishlistItems.length !== 0?<WishListProducts data = {WishlistItems}/>:<NoItems category={"Wishlist"}/>):<NotloggedIn/>}
            

        </div>
    </div>
  )
}

export default WishList
