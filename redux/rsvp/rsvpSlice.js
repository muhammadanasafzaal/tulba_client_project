import { createSlice } from "@reduxjs/toolkit";
import { createRsvp, getRsvp } from "./rsvpActions";

const initialState = {
	loading: false,
	list: [],
	success: null,
	error: null,
};

const rsvpSlice = createSlice({
	name: "rsvp",
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
		resetList: (state) => {
			state.success = null
			state.list = []
		}
	},
	extraReducers: {
		// add rsvp
		[createRsvp.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createRsvp.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[createRsvp.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		//get list
		[getRsvp.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getRsvp.fulfilled]: (state, { payload }) => {
			state.list = payload.data;
			state.loading = false;
		},
		[getRsvp.rejected]: (state, { payload }) => {
			state.loading = false;
			state.list = []
		},
	},
});

export const { resetSuccess, resetError, resetList } = rsvpSlice.actions;

export default rsvpSlice.reducer;
