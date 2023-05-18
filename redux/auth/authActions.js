import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";

export const registerUser = createAsyncThunk(
	"auth/register",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.post("/api/v1/auth/signup", data);
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
