export const setToken = (token) => {
	if (window !== undefined) {
		localStorage.setItem("token", token);
	}
};

export const getToken = () => {
	if (window === undefined) return null;

	const token = localStorage.getItem("token");
	return token || null;
};
