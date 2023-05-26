import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice";
import rsvpReducer from "./rsvp/rsvpSlice";
import taskReducer from "./task/taskSlice";
import weddingReducer from "./wedding/weddingSlice";
import weddingEventReducer from "./weddingEvent/weddingEventSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		rsvp: rsvpReducer,
		task: taskReducer,
		wedding: weddingReducer,
		weddingEvent: weddingEventReducer
	},
});

export default store;
