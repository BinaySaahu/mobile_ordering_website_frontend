import React from "react";
import FilterItems from "../components/filterProducts/FilterItems";

const FilterProducts = ({filteredData}) => {
  return (
    <div className="w-full md:py-20">
      <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0 ">
          <div className="text-[20px] md:text-[34px] mb-5 font-semibold leading-tight">
            Filtered Products
          </div>
        </div>
        {filteredData?.map((data,idx)=>(
            <FilterItems filteredData = {data} key={idx}/>

        ))}
      </div>
    </div>
  );
};

export default FilterProducts;
