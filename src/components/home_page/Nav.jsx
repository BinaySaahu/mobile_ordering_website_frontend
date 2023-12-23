import React, { useEffect, useState } from "react";
import search_logo from "../../assets/search_logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Link } from "react-router-dom";
import ProfileMenu from "../ProfileMenu";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../store/slices/userSlice";
const Nav = ({setShowLoginModal,showFilter,setShowFilter,setShowSearch,products,setSearchedProducts}) => {
  const User = useSelector((state)=>state.user)
  const {cartItems} = useSelector((state)=>state.cart)
  const {WishlistItems} = useSelector((state)=>state.wishlist)
  const dispatch = useDispatch()
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setlastScrollY] = useState(0);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
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


  useEffect(()=>{
    const u = JSON.parse(localStorage.getItem('userInfo'))
    if(u){
      dispatch(addUser(u))
    }
  },[])

  const dataInp = (e)=>{
    setShowSearch(true)
    setSearchedProducts(products.filter((p)=> p.name.toLowerCase().includes(e.target.value.toLowerCase())))
    // console.log(searched_products)
  }
  return (
    <div
      className={`md:flex justify-between gap-3 items-center px-3 py-1 w-full h-[50px] md:h-[80px] bg-white z-[22] sticky top-0 transition-transform duration-300 ${show} hidden`}
    >
      <Link to='/' className="bg-black py-4 px-3 rounded-[10px] font-bold w-[15%] text-center text-[80%]">
        <span className="text-white">Mobile</span>
        <span className="text-white"> World</span>
      </Link>
      <div className="flex items-center w-full">
        <div className="flex items-center bg-slate-200 p-2 rounded-lg w-full justify-between">
          <img src={search_logo} alt="" />
          <input
            type="text"
            className=" bg-transparent mx-4 outline-none"
            placeholder="Search phones here..."
            onChange={dataInp}
          />
          <div className="w-8 md:w-10 h-8 md:h-10 rounded-full md:flex hidden justify-center items-center cursor-pointer relative" onClick={()=>setShowFilter(!showFilter)}>
            {showFilter?<CloseIcon/>:<FilterListIcon/>}
            {/* <div className="h-[10px] md:h-[14px] min-w-[10px] md:min-w-[14px] rounded-full bg-red-600 top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] absolute">
              2
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-10">
        <Link to='/cart'>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full md:flex hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <ShoppingCartIcon />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] absolute">
              {cartItems.length}
            </div>
          </div>
        </Link>
        <Link to='/wishlist'>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full md:flex hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <FavoriteBorderIcon />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px] absolute">
              {WishlistItems.length}
            </div>
          </div>
        </Link>
        <Link>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full md:flex hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative"
          onMouseEnter={() => setShowProfileMenu(true)}
          onMouseLeave={() => setShowProfileMenu(false)}
          >
            {User.isLoggedIn?<img src={User.Image} alt="" className="rounded-full object-contain h-8"/>:<PersonOutlineIcon />}
            {showProfileMenu && <ProfileMenu setShowLoginModal = {setShowLoginModal} isLoggedIn = {User.isLoggedIn}/>}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
