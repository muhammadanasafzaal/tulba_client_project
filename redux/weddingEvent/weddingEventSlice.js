import { createSlice } from "@reduxjs/toolkit";
import { createWeddingEvent, getWeddingEvents } from "./weddingEventActions";

const initialState = {
	loading: false,
	list: [],
	success: null,
	error: null,
};

const weddingEventSlice = createSlice({
	name: "weddingEvent",
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
		[createWeddingEvent.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createWeddingEvent.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[createWeddingEvent.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		//get list
		[getWeddingEvents.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getWeddingEvents.fulfilled]: (state, { payload }) => {
			console.log(payload);
			state.list = payload.data;
			state.loading = false;
		},
		[getWeddingEvents.rejected]: (state, { payload }) => {
			state.loading = false;
			state.list = [];
		},
	},
});

export const { resetSuccess, resetError } = weddingEventSlice.actions;

export default weddingEventSlice.reducer;
