import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {          // step 3.
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
      // state.pop(action.payload);
      // console.log(action.payload);
    },
    deleteUsers(state, action) {
   
    },
  },
});

// console.log(userSlice.actions);

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions; // step 4.