import { createSlice } from "@reduxjs/toolkit";

export const CategorysSlice = createSlice({
  name: "category",
  initialState: {
    categorys: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all categorys
    getCategorysStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorysSuccess: (state, action) => {
      state.isFetching = false;
      state.categorys = action.payload;
    },
    getCategorysFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //create new categorys
    createCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys.push(action.payload);
    },
    createCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // delete category
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys.splice(
        state.categorys.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // update Categorys
    updateCategorysStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.categorys[
        state.categorys.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.Category;
    },
    updateCategorysFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCategorysFailure,
  getCategorysStart,
  getCategorysSuccess,
  createCategoryFailure,
  createCategoryStart,
  createCategorySuccess,
  deleteCategoryFailure,
  deleteCategorySuccess,
  deleteCategoryStart,
  updateCategorysFailure,
  updateCategorysStart,
  updateCategorysSuccess,
} = CategorysSlice.actions;

export default CategorysSlice.reducer;
