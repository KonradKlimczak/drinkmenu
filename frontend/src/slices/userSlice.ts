import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { UserOutput } from "../../../common";

export interface UserState {
  user?: UserOutput;
}

const getInitialUser = () => {
  const raw = localStorage.getItem("user");
  if (!raw) {
    return undefined;
  }
  return JSON.parse(raw);
};

const initialState: UserState = {
  user: getInitialUser(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserOutput>) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: state => {
      state.user = undefined;
      localStorage.removeItem("user");
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions;
