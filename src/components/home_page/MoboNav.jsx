import React, { useEffect, useState } from "react";
import search_logo from "../../assets/search_logo.png";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

const MoboNav = ({active,setActive,setShowLoginModal,showFilter,setShowFilter,setShowSearch,products,setSearchedProducts}) => {
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setlastScrollY] = useState(0);
  const controlNav = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setlastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNav);
    return () => {
      window.removeEventListener("scroll", controlNav);
    };
  }, [lastScrollY]);
  const dataInp = (e)=>{
    setShowSearch(true)
    setSearchedProducts(products.filter((p)=> p.name.toLowerCase().includes(e.target.value.toLowerCase())))
    // console.log(searched_products)
  }
  return (
    <div
      className={`flex justify-between items-center sm:px-3 px-1 py-1 w-full h-[50px] md:h-[80px] bg-white z-[100] sticky top-0 transition-transform duration-300 ${show} md:hidden`}
    >
      <Link to='/' className="bg-black p-3 rounded-[10px] font-bold sm:text-[12px] text-[8px]">
        <span className="text-white">M</span>
        <span className="text-white"> W</span>
      </Link>
      <div className="flex items-center sm:w-fit w-fit">
        <div className="flex items-center bg-slate-200 p-2 rounded-lg w-full justify-around">
          <img src={search_logo} alt="" />
          <input
            type="text"
            className=" bg-transparent mx-4 outline-none w-full sm:text-[20px] text-[10px]"
            placeholder="Search phones here..."
            onChange={dataInp}
          />
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full flex justify-center items-center cursor-pointer relative" onClick={()=>setShowFilter(!showFilter)}>
            {showFilter?<CloseIcon/>:<FilterListIcon/>}
            {/* <div className="h-[10px] md:h-[14px] min-w-[10px] md:min-w-[14px] rounded-full bg-red-600 top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] absolute">
              2
            </div> */}
          </div>
        </div>
      </div>
      <div onClick={()=>setActive(!active)}>
        {active?<CloseIcon/>:<MenuIcon/>}
      </div>
    </div>
  );
};

export default MoboNav;
