import styles from "/styles/Home.module.scss";
// import HomeTopSection from "modules/home/topsection";
import Footer from "layout/footer";
import Header from "layout/header";
import HomeTopSection from "modules/home/topsection";
// import 'bootstrap/dist/css/bootstrap.css';
import Faq from "modules/home/faq";
import Template from "modules/home/template";
import Plan from "modules/home/plan";
import Vendors from "modules/home/Vendors";
import Testimonial from "modules/home/Testimonial";
import Browse from "modules/home/Browse";
////////////////////
import { Provider } from "react-redux";
import store from "redux/store";
import React, { useRef } from 'react';


// import "bootstrap/dist/css/bootstrap.css";

// import Signup from "./signup";
// import Login from "./loginin";
// import ForgotPassword from "./forgotpassword";
export default function Home() {

	const bodyRef = useRef(null);

	return (
		<Provider store={store}>
			<div className={styles.mainPage_section} ref={bodyRef}>
				<Header />
				<HomeTopSection bodyRef={bodyRef}/>
				<Plan />
				<Browse />
				<Template />
				<Testimonial />
				<Vendors />
				<Faq />
				<Footer />
				{/* <Signup /> */}
				{/* <Login/> */}
				{/* <ForgotPassword/> */}
			</div>
		</Provider>
	);
}
