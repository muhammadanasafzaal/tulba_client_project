import { configureStore } from "@reduxjs/toolkit";
import generalReducer from "./../redux/appSlice";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import authReducer from "./auth/authSlice";
import rsvpReducer from "./rsvp/rsvpSlice";
import taskReducer from "./task/taskSlice";
import weddingReducer from "./wedding/weddingSlice";
import weddingEventReducer from "./weddingEvent/weddingEventSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = {
	vendor: generalReducer,
	auth: authReducer,
	rsvp: rsvpReducer,
	task: taskReducer,
	wedding: weddingReducer,
	weddingEvent: weddingEventReducer
}

const persistedReducer = persistReducer(persistConfig, generalReducer)


const store = configureStore({
	reducer: {
		vendor: generalReducer,
		auth: authReducer,
		rsvp: rsvpReducer,
		task: taskReducer,
		wedding: weddingReducer,
		weddingEvent: weddingEventReducer
	},
  middleware: [thunk]
})

export default store
// export const persistor = persistStore(store)

