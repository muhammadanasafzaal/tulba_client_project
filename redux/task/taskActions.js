import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";

export const createTask = createAsyncThunk(
	"task/create",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.post(`/api/v1/weddings/${data.weddingId}/taskList`, data.taskData);

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

export const getTasks = createAsyncThunk(
	"task/get",
	async (data, { rejectWithValue }) => {
		try {
			console.log(data);
			const res = await api.get(`/api/v1/weddings/${data}/taskList`)

			console.log(res.data);

			return res.data;
		} catch (error) {
			console.log(error);
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	}
);
