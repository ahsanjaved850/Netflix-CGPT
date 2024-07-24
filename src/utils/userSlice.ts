import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  uid: string | null;
  email: string | null;
  displayName: string | null;
}

const initialState: UserState = {
  uid: null,
  email: null,
  displayName: null,
}  

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (_state, action: PayloadAction<UserState>) : UserState  => {
      return action.payload;
    },
    removeUser: () => {
      return initialState;
  },
}
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;