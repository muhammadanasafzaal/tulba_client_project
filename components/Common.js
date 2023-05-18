import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "redux/auth/authActions";

const Common = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUser());
	}, []);

	return <></>;
};

export default Common;
