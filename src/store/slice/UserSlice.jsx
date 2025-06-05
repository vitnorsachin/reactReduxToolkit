import { createSlice } from "@reduxjs/toolkit";

console.log("hello sachin")


const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export default userSlice.reducer;