import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./ui-slice";
import PostSlice from "./post-slice";

const store = configureStore({
  reducer: {
    ui: UiSlice.reducer,
    posts: PostSlice.reducer,
  },
});

export const { openModal, closeModal, setModalType } = UiSlice.actions;

export const { setFetchPosts, setModalPost, setUseSSRPosts } =
  PostSlice.actions;

export default store;
