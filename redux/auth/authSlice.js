import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin, getUser, userLogout } from "./authActions";

const initialState = {
	loading: true,
	userInfo: null, // for user object
	userToken: null, // for storing the JWT
	error: null,
	success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		resetError: (state) => {
			state.error = null;
			state.loading = false;
		},
	},
	extraReducers: {
		// register user
		[registerUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			state.userInfo = payload.data?.user;
			state.userToken = payload.token;
			state.loading = false;
			state.success = true; // registration successful
		},
		[registerUser.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// login user
		[userLogin.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[userLogin.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload.data?.user;
			state.userToken = payload.token;
		},
		[userLogin.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
		// Get user
		[getUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[getUser.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = payload.data?.user || null;
			state.userToken = payload.token || null;
		},
		[getUser.rejected]: (state, { payload }) => {
			state.loading = false;
			// state.error = payload;
		},
		// logout user
		[userLogout.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[userLogout.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.userInfo = null;
			state.userToken = null;
		},
		[userLogout.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
