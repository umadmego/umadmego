import { userSlice } from './slices/user';
import { configureStore } from '@reduxjs/toolkit';
import { loadingIndicatorSlice } from './slices/loadingIndicator';
import { mobileBarSlice } from './slices/mobileBar';
import { youtubeVideoSlice } from './slices/youtubeVideos';

export const store = configureStore({
  reducer: {
    [loadingIndicatorSlice.name]: loadingIndicatorSlice.reducer,
    [mobileBarSlice.name]: mobileBarSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [youtubeVideoSlice.name]: youtubeVideoSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
