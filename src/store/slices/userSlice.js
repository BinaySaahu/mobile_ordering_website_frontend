import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    UserName:"",
    Email:"",
    Image:"",
    isLoggedIn: false,
    token:""
  },
  reducers: {
    addUser: (state,action) => {
      state.UserName = action.payload.Username;
      state.Email = action.payload.Email;
      state.Image = action.payload.Image;
      state.token = action.payload.token
      state.isLoggedIn = true;
      localStorage.setItem("userInfo",JSON.stringify(action.payload));
      localStorage.setItem("isLoggedIn",state.isLoggedIn);
    },
    // setToken:(state,action)=>{
    //   state.token = action.payload
    //   localStorage.setItem("token",action.payload);
    // }
  },
})
export const { addUser } = userSlice.actions

export default userSlice.reducer