import React, { useEffect, useState } from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/slices/userSlice";

const MoboLogin = ({ setShowLoginModal }) => {
  const [signIn, toggle] = useState(false);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, setErr] = useState("");
  const dataInp = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  black";
    }
    if (name === "email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.borderBottom = "2px solid  black";
      }
    }
    setUser({ ...user, [name]: value });
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email && user.password && user.name) {
      try {
        const response = await axios.post("/auth/register", user);
        console.log(response);

        if (response.status === 200) {
          const token = response.data.secrete_token;
          dispatch(addUser({ ...response.data.user, token }));
          // dispatch(setToken(response.data.secrete_token));
          setShowLoginModal(false);
          console.log("Logged in");
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
        if (err.response.data.code === 1) {
          setErr("User already exsists");
          return;
        }
        setErr("Unwanted error");
        console.log(err);
      }
    } else {
      setErr("Please enter all the fields");
    }
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email && user.password) {
      try {
        const response = await axios.post("/auth/login", user);
        console.log(response);

        if (response.status === 200) {
          const token = response.data.secrete_token;
          dispatch(addUser({ ...response.data.user, token }));
          // dispatch(setToken(response.data.secrete_token));
          setShowLoginModal(false);

          console.log("Logged in");
        } else {
          console.log("error");
        }
      } catch (err) {
        console.log(err);
        if (err.response.data.code === 2) {
          setErr("Invalid email");
          return;
        }
        if (err.response.data.code === 4) {
          setErr("Invalid password");
          return;
        }
        if (err.response.data.code === 3) {
          setErr("User does not exists");
          return;
        }
        setErr("Unwanted error");
        console.log(err);
      }
    } else {
      setErr("Please enter all the fields");
    }
  };

  useEffect(() => {
    setErr("");
  }, [user]);
  return (
    <div className="flex flex-col min-h-[500px] md:hidden absolute bottom-0 w-full bg-white rounded-t-lg items-center">
      {/* Sign up container */}
      <div className="h-full w-full flex justify-end items-start py-2">
        <CancelIcon
          className="cursor-pointer text-black mr-3"
          onClick={() => setShowLoginModal(false)}
        />
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <form
          className={`bg-[#ffffff] flex items-center justify-center transition-all ease-in-out duration-800 flex-col h-full text-center ${
            signIn
              ? "-translate-x-full opacity-0 w-0 p-0"
              : "w-full md:px-[50px] px-[25px]"
          }`}
        >
          <h1 className="font-bold m-0">Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            className="bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] w-full"
            name="name"
            onChange={dataInp}
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] w-full"
            name="email"
            onChange={dataInp}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] w-full"
            name="password"
            onChange={dataInp}
          />
          <button
            className="rounded-[20px] border-[1px] border-solid border-black/[0.9] bg-black/[0.9] text-[#ffffff] text-[12px] font-bold py-[12px] px-[45px] uppercase transition-transform duration-1000 ease-in"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
          {err != "" && <div className="text-red-600 mt-1">{err}</div>}
          <p className="text-[13px] text-slate-400 mt-5">
            Already have an account?{" "}
            <span
              className="font-bold text-black cursor-pointer"
              onClick={() => toggle(true)}
            >
              Sign in
            </span>
          </p>
        </form>
        {/* Sign in container */}
        <form
          className={`bg-[#ffffff] flex items-center justify-center transition-all ease-in-out duration-800 flex-col h-full text-center ${
            signIn
              ? "opacity-[1] w-full md:px-[50px] px-[25px]"
              : "w-0 p-0 opacity-0"
          }`}
        >
          <h1 className="font-bold m-0">Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            className="bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] w-full"
            name="email"
            onChange={dataInp}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-[#eee] border-0 py-[12px] px-[15px] my-[8px] w-full"
            name="password"
            onChange={dataInp}
          />
          <a href="#" className="text-[#333] text-[14px] my-[15px]">
            Forgot your password?
          </a>
          <button
            className="rounded-[20px] border-1 border-solid border-black/[0.9] bg-black/[0.9] text-[#ffffff] text-[12px] font-bold py-[12px] px-[45px] uppercase transition-transform duration-1000 ease-in"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          {err != "" && <div className="text-red-600 mt-1">{err}</div>}
          <p className="text-[13px] text-slate-400 mt-5">
            New here?{" "}
            <span
              className="font-bold text-black cursor-pointer"
              onClick={() => toggle(false)}
            >
              Sign up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default MoboLogin;
