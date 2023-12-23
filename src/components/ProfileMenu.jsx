import React from "react";

const ProfileMenu = ({setShowLoginModal,isLoggedIn}) => {
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!isLoggedIn){
      setShowLoginModal(true);

    }else{
      localStorage.clear()
      window.location.reload();
    }
  }
  return (
    <div className="flex flex-col top-9 bg-white absolute right-0">
      <div className=" text-black w-[130px] rounded-sm border-b" onClick={handleSubmit}>
        <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md w-full text-[12px]">
          {isLoggedIn?<p>Logout</p>:<p>Login/Sign up</p>}
          <span>
            {/* <CgLogIn className="text-[15px] md:text-[20px]" /> */}
          </span>
        </li>
      </div>
    </div>
  );
};

export default ProfileMenu;
