import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "utils/Loader";

export default function withAuth(Component) {
	return function ProtectedRoute({ ...props }) {
		const { userInfo, loading } = useSelector((state) => state.auth);
		const router = useRouter();

		useEffect(() => {
			!loading && !userInfo && router.push("/login");
		}, [userInfo, loading]);

		if (loading || (!loading && !userInfo)) return <Loader loading />;

		return <Component {...props} />;
	};
}
