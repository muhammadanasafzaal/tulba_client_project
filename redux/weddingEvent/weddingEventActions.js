import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";

export const createWeddingEvent = createAsyncThunk(
	"WeddingEvent/create",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.post(
				`/api/v1/weddings/${data.weddingId}/weddingEvents`,
				data.WeddingEventData
			);

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

export const getWeddingEvents = createAsyncThunk(
	"WeddingEvent/get",
	async (data, { rejectWithValue }) => {
		try {
			console.log(data);
			const res = await api.get(`/api/v1/weddings/${data}/weddingEvents`);

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
