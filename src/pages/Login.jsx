import React from "react";
import LoginForm from "../components/login/LoginForm";
import CancelIcon from "@mui/icons-material/Cancel";
import MoboLogin from "../components/login/MoboLogin";

const Login = ({ setShowLoginModal }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-full fixed top-0 left-0 bg-black/[0.6] z-[20]">
        <div className="h-fit md:w-fit flex w-full">
          <LoginForm setShowLoginModal = {setShowLoginModal}/>
          <MoboLogin setShowLoginModal = {setShowLoginModal}/>
          <div className="h-full bg-red md:flex hidden items-start mt-0">
            <CancelIcon className="closeIcon relative bottom-1 left-1 cursor-pointer" onClick = {()=>setShowLoginModal(false)}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
