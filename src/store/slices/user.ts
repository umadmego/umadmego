import { sendFeedback } from './../../functions/feedback';
import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '@/types/types';
import { SESSION_NAME } from '@/functions/environmentVariables';

// Define a type for the slice state

// Define the initial state using that type
const initialState: { user: UserType | null } = {
  user: null,
};

// Actual Slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser(state, action) {
      state.user = action.payload.user;
    },

    signOut(state) {
      state.user = null;
      localStorage.removeItem(SESSION_NAME!);
      sendFeedback('Logout successful', 'success');
    },
  },
});

export const { updateUser, signOut } = userSlice.actions;

export default userSlice.reducer;
