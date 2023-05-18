import { createSlice } from "@reduxjs/toolkit";
import { registerUser, userLogin } from "./authActions";

const userToken = localStorage.getItem("token")
	? localStorage.getItem("token")
	: null;

const initialState = {
	loading: false,
	userInfo: {}, // for user object
	userToken, // for storing the JWT
	error: null,
	success: false, // for monitoring the registration process.
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: {
		// register user
		[registerUser.pending]: (state) => {
			state.loading = true;
			state.error = null;
		},
		[registerUser.fulfilled]: (state, { payload }) => {
			state.userInfo = payload.data.user;
			state.userToken = payload.token;
			state.loading = false;
			state.success = true; // registration successful

			localStorage.setItem("token", payload.userToken);
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
			console.log(payload)
			state.loading = false;
			state.userInfo = payload.data.user;
			state.userToken = payload.token;

			localStorage.setItem("token", payload.userToken)
		},
		[userLogin.rejected]: (state, { payload }) => {
			state.loading = false;
			state.error = payload;
		},
	},
});

export default authSlice.reducer;
