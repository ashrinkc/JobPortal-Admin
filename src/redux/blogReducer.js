import { createSlice } from "@reduxjs/toolkit";

export const BlogsSlice = createSlice({
  name: "blog",
  initialState: {
    blogs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all blogs
    getBlogsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getBlogsSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs = action.payload;
      // console.log(state.blogs);
    },
    getBlogsFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    //create new blogs
    createBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs.push(action.payload);
      console.log(action.payload);
    },
    createBlogFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //delete Blogs
    deleteBlogStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteBlogSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs.splice(
        state.blogs.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteBlogFailure: (state) => {
      state.isFetching = false;
      state.error = false;
    },
    //update blogs
    updateBlogsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateBlogsSuccess: (state, action) => {
      state.isFetching = false;
      state.blogs[
        state.blogs.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.blog;
    },
    updateBlogsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getBlogsFailure,
  getBlogsStart,
  getBlogsSuccess,
  createBlogFailure,
  createBlogStart,
  createBlogSuccess,
  deleteBlogFailure,
  deleteBlogSuccess,
  deleteBlogStart,
  updateBlogsFailure,
  updateBlogsStart,
  updateBlogsSuccess,
} = BlogsSlice.actions;

export default BlogsSlice.reducer;
