import { createSlice } from "@reduxjs/toolkit";
import { createTask, deleteTask, getTasks, updateTask } from "./taskActions";

const initialState = {
	loading: false,
	list: [],
	success: null,
	error: null,
};

const taskSlice = createSlice({
	name: "task",
	initialState,
	reducers: {
		resetError: (state) => {
			state.error = null;
			state.loading = false;
		},
		resetSuccess: (state) => {
			state.success = null;
			state.loading = false
		},
	},
	extraReducers: {
		// add rsvp
		[createTask.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[createTask.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true; // registration successful
		},
		[createTask.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		//get list
		[getTasks.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getTasks.fulfilled]: (state, { payload }) => {
			state.list = payload.data;
			state.loading = false;
		},
		[getTasks.rejected]: (state, { payload }) => {
			state.loading = false;
			state.list = []
		},
		//update list
		[updateTask.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[updateTask.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true;
		},
		[updateTask.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload
		},
		//update list
		[deleteTask.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[deleteTask.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.success = true;
		},
		[deleteTask.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload
		},
	},
});

export const { resetSuccess, resetError } = taskSlice.actions;

export default taskSlice.reducer;
