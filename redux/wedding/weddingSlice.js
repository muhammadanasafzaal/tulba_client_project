import { createSlice } from "@reduxjs/toolkit";
import { createWedding, getWeddings } from "./weddingActions";

const initialState = {
	loading: false,
	list: [],
	success: null,
	error: null,
};

const rsvpSlice = createSlice({
	name: "wedding",
	initialState,
	reducers: {
		resetError: (state) => {
			state.error = null;
			state.loading = false;
		},
		resetSuccess: (state) => {
			state.success = null;
			state.loading = false;
		},
	},
	extraReducers: {
		// add rsvp
		[createWedding.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createWedding.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[createWedding.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		//get list
		[getWeddings.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getWeddings.fulfilled]: (state, { payload }) => {
			state.list = payload.data;
			state.loading = false;
		},
		[getWeddings.rejected]: (state, { payload }) => {
			state.loading = false;
		},
	},
});

export const { resetSuccess, resetError } = rsvpSlice.actions;

export default rsvpSlice.reducer;
