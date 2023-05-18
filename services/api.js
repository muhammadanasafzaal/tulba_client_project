import axios from "axios";
import { getToken } from "utils/tokens";

console.log("process.env.base_url >>>>>>>>>", process.env.base_url);

export const api = axios.create({
	baseURL: process.env.base_url,
});

api.interceptors.request.use(
	(req) => {
		const token = getToken();
		if (token) req.headers.Authorization = `Bearer ${token}`;
		return req;
	},
	(error) => Promise.reject(error)
);
