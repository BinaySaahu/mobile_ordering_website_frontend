import React from 'react'
import { Link } from 'react-router-dom'

const SearchBox = ({showSearch,searchedProducts,setShowSearch}) => {
  return (
    <div className={showSearch ? "activeSearch" : "search"}>
        {searchedProducts?.map((p,i)=>(
            <Link to = '/product/productDet' state={{data:p}} key={i} className='border-2 md:text-[15px] text-[12px] w-full text-center py-3' onClick={()=>setShowSearch(false)}>{p.name + "(" + p.color + "," + p.ROM + ")"}</Link>
        ))}
        <button className='md:text-[15px] text-[12px] border-2 border-black font-semibold py-2 px-3 cursor-pointer' onClick={()=>setShowSearch(false)}>Close</button>
    </div>
  )
}

export default SearchBox
