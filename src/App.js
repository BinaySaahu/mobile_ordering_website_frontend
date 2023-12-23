import './App.css';
import { Routes,Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Nav from './components/home_page/Nav';
import MoboNav from './components/home_page/MoboNav';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { useEffect, useState } from 'react';
import Cart from './pages/Cart';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Footer from './components/Footer';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Overlay from './components/Overlay';
import { filters } from './filter';
import FilterProducts from './pages/FilterProducts';
import { filterData } from './utils/helper';
import SearchBox from './components/SearchBox';


function App() {
  axios.defaults.baseURL = "http://localhost:8001"
  const [active, setActive] = useState(false);
  const [products,setProducts] = useState([])
  const [searchedProducts,setSearchedProducts] = useState([])
  const [load,setLoad] = useState(true)
  const [showFilter,setShowFilter] = useState(false);
  const [showSearch,setShowSearch] = useState(false);
  const [filteredProducts,setFilteredProducts] = useState([]);
  const [filterList,setFilterList] = useState({
    name:"",
    price:"",
    processor:"",
    ROM:"",
    os:"",
  })
  const [showLoginModal,setShowLoginModal] = useState(false)
  const User = useSelector((state)=>state.user)
  const navigate = useNavigate()
  const logOut = ()=>{
    localStorage.clear()
    window.location.reload();
  }

  const loadData = async()=>{
    try{
      const response = await axios.get('/product/getAllProducts')
      console.log("########### Response ########")
      console.log(response);
      if(response.status === 200){
        setLoad(false);
        setProducts(response?.data?.products)
      }

    }catch(err){
      console.log(err)
    }
    
  }
  useEffect(()=>{
    loadData();

  },[])



  const dataInp = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFilterList({...filterList,[name]:value})

  }

  console.log(filterList)
  const startFilter = ()=>{
    setFilteredProducts(filterData(products, filterList));
    setShowFilter(!showFilter);
    console.log(filteredProducts);
    navigate('/filterproducts')

  }
  return (
    <div className={`App ${active?"overflow-hidden":""}`}>
      <Nav setShowLoginModal = {setShowLoginModal} showFilter = {showFilter} setShowFilter = {setShowFilter} setShowSearch = {setShowSearch} products={products} setSearchedProducts = {setSearchedProducts}/>
      <MoboNav active={active} setActive={setActive} setShowLoginModal = {setShowLoginModal} showFilter = {showFilter} setShowFilter = {setShowFilter} setShowSearch = {setShowSearch} products={products} setSearchedProducts = {setSearchedProducts}/>
      {active && <Overlay/>}
      <div className={active ? "activeSideNav" : "sideNav"}>
        <ul className="h-3/4 w-full flex flex-col justify-around items-center text-[14px] sm:text-[17px]">
          <li className="nav_li" onClick={() => setActive(!active)}>
            <Link
              to={`/`}
              className={`cursor-pointer transition-all duration-300`}
            >
              <p className='flex justify-start gap-2 items-center'><HomeIcon/>Home</p>
            </Link>
          </li>
          <li onClick={() => {setShowLoginModal(true); setActive(!active)}} className="nav_li ">
            <div
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p>{User.isLoggedIn?<span className='flex justify-start gap-2 items-center'><img src={User.Image} alt="" className='rounded-full h-8'/>{User.UserName}</span>:<span className='flex justify-start gap-2 items-center'><LoginIcon/>Login/Sign up</span>}</p>
            </div>
          </li>
          <li onClick={() => setActive(!active)} className="nav_li ">
            <Link
              to={`/wishlist`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p className='flex justify-start gap-2 items-center'><FavoriteBorderIcon/>Wishlist</p>
            </Link>
          </li>
          <li onClick={() => setActive(!active)} className="nav_li ">
            <Link
              to={`/cart`}
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p className='flex justify-start gap-2 items-center'><ShoppingCartIcon/>Cart</p>
            </Link>
          </li>
          {User.isLoggedIn && <li onClick={logOut} className="nav_li ">
            <div
              
              className={`hover:text-violet-600 cursor-pointer transition-all duration-300`}
            >
              <p className='flex justify-start gap-2 items-center'><LogoutIcon/>Logout</p>
            </div>
          </li>}
        </ul>
      </div>
      {showFilter && <Overlay/>}
      <div className={showFilter ? "activeFilter" : "filter"}>
        {filters.map((filter,idx)=>(
        <select name={filter.name} id="" key={idx} className='md:text-[15px] text-[12px] border-2 py-2 px-3 cursor-pointer' onChange={dataInp}>
          <option hidden>{filter.name}</option>
          {filter.values.map((v,i)=>(
            <option value={v.value} key={i}>{v.label}</option>
          ))}

        </select>
        ))}
        <button className='md:text-[15px] text-[12px] border-2 border-black font-semibold py-2 px-3 cursor-pointer' onClick = {startFilter}>SEARCH</button>

      </div>
      {showSearch && <Overlay onClick = {()=>setShowSearch(false)}/>}
      <SearchBox showSearch = {showSearch} searchedProducts = {searchedProducts} setShowSearch = {setShowSearch}/>

      
      <Routes>
        <Route path='/' element = {<Home products = {products} load = {load}/>}/>
        <Route path='/product/productDet' element = {<ProductDetails/>}/>
        <Route path='/cart' element = {<Cart/>}/>
        <Route path='/wishlist' element = {<WishList/>}/>
        <Route path='/filterproducts' element = {<FilterProducts filteredData = {filteredProducts}/>}/>
      </Routes>
      {showLoginModal&&<Login setShowLoginModal = {setShowLoginModal}/>}
      <Footer/>
    </div>
  );
}

export default App;
