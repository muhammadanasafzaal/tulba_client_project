import Footer from "layout/footer";
import Header from "layout/header";
import Banner from "modules/profile/Banner";
import Temp from "modules/profile/Temp";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import withAuth from "hoc/withAuth";

const Profile = () => (
	<div>
		<Header />
		<Banner />
		<Temp />
		<Footer />
	</div>
);

// export default withAuth(Profile);
export default Profile;
