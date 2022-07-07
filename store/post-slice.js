import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "post",
  initialState: {
    fetchPosts: false,
    useSsrPosts: true,
    modalPost: {},
  },
  reducers: {
    setFetchPosts(state, action) {
      state.fetchPosts = action.payload;
    },

    setUseSSRPosts(state, action) {
      state.useSsrPosts = action.payload;
    },

    setModalPost(state, action) {
      state.modalPost = action.payload;
    },
  },
});

export default PostSlice;
