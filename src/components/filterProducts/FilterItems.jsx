import React from 'react'
import { getDiscountedValue } from '../../utils/helper'

const FilterItems = ({filteredData}) => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b border-t my-5">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img
          src={filteredData.thumbnail_image}
          alt=""
          height={120}
          width={120}
        ></img>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
            {filteredData.name}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
            {filteredData.subtitle}
          </div>
          <div className="text-sm md:text-md font-medium text-black/[0.5] block mt-2">
            MRP : ${getDiscountedValue(filteredData.price)}
          </div>
        </div>
        <div className="text-sm md:text-md font-medium text-black/[0.5] md:block hidden">
          {filteredData.subtitle}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
            <div className="flex items-center gap-1">
              <div className="font-semibold">Color:</div>
              {filteredData.color}
            </div>
            <div className="flex items-center gap-1">
              <div className="font-semibold">Storage:</div>
              {filteredData.ROM}
            </div>
          </div>
          {/* <DeleteIcon
            className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
          /> */}
        </div>
      </div>
    </div>
  )
}

export default FilterItems
