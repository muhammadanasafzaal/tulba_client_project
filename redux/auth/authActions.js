import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";
import { getToken, removeToken, setToken } from "utils/tokens";

export const registerUser = createAsyncThunk(
	"auth/register",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.post("/api/v1/auth/signup", data);
			setToken(res.data.token);

			return res.data;
		} catch (error) {
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const userLogin = createAsyncThunk(
	"auth/login",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.post("/api/v1/auth/login", data);
			setToken(res.data.token);

			return res.data;
		} catch (error) {
			// return custom error message from API if any
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const getUser = createAsyncThunk(
	"auth/getMe",
	async (data, { rejectWithValue }) => {
		const token = getToken();
		console.log(token);
		if (!token) {
			return { loading: false };
		}
		try {
			const res = await api.get("/api/v1/auth/getMe");

			return { ...res.data, token };
		} catch (error) {
			removeToken();
			// return custom error message from API if any
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);

export const userLogout = createAsyncThunk(
	"auth/logout",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.get("/api/v1/auth/logout");
			removeToken();
			if (typeof window !== undefined) window.location.href = "/";

			return res.data;
		} catch (error) {
			// return custom error message from API if any
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);
