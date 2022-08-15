import { createSlice } from "@reduxjs/toolkit";

export const jobsSlice = createSlice({
  name: "job",
  initialState: {
    jobs: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all jobs
    getJobsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getJobsSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs = action.payload;
    },
    getJobsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // create new jobs
    createJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    createJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs.push(action.payload);
    },
    createJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //delete jobs
    deleteJobStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteJobSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs.splice(
        state.jobs.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteJobFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // update jobs
    updateJobsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateJobsSuccess: (state, action) => {
      state.isFetching = false;
      state.jobs[
        state.jobs.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.job;
    },
    updateJobsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getJobsFailure,
  getJobsStart,
  getJobsSuccess,
  createJobFailure,
  createJobStart,
  createJobSuccess,
  deleteJobFailure,
  deleteJobSuccess,
  deleteJobStart,
  updateJobsFailure,
  updateJobsStart,
  updateJobsSuccess,
} = jobsSlice.actions;

export default jobsSlice.reducer;
