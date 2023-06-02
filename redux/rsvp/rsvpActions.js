import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "services/api";

export const createRsvp = createAsyncThunk(
	"rsvp/create",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.post(
				`/api/v1/weddings/${data.weddingId}/weddingEvents/${data.weddingEventId}/rsvp`,
				data.guestData
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

export const getRsvp = createAsyncThunk(
	"rsvp/get",
	async (data, { rejectWithValue }) => {
		try {
			console.log("running");
			const res = await api.get(
				`/api/v1/weddings/${data.weddingId}/weddingEvents/${data.weddingEventId}/rsvp`
			);

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

export const updateRsvp = createAsyncThunk(
	"rsvp/update",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.patch(
				`/api/v1/weddings/${data.weddingId}/weddingEvents/${data.weddingEventId}/rsvp/${data.guestData.id}`,
				data.guestData
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

export const deleteRsvp = createAsyncThunk(
	"rsvp/delete",
	async (data, { rejectWithValue }) => {
		try {
			const res = await api.delete(
				`/api/v1/weddings/${data.weddingId}/weddingEvents/${data.weddingEventId}/rsvp/${data.id}`
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
