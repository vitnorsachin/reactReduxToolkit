import { createSlice } from "@reduxjs/toolkit";
import { clearAllUser } from "../action";

const userSlice = createSlice({
  name: "user",
  initialState: [],

  reducers: {

    addUser(state, action) {
      state.push(action.payload);
    },

    removeUser(state, action) {
      state.splice(action.payload, 1);
    },

    // clearAllUser(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder){
    builder.addCase(clearAllUser, () => {
      return [];
    })
  }
});

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;