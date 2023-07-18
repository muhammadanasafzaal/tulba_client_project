import Button from "components/form/button";
import InputField from "components/form/inputfield";
import styles from "/styles/authentication/Signup.module.scss";
import Image from "next/image";
import googlelogo from "public/assests/GoogleLogo.svg";
import facebooklogo from "public/assests/facebooklogo.svg";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "redux/auth/authActions";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "utils/Loader";
import { toast } from "react-hot-toast";
import { resetError } from "redux/auth/authSlice";
import { validateEmail, validatePassword } from "utils/functions";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const router = useRouter();

	const { loading, userInfo, error } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleSignup = async () => {
		if (!validateEmail(email)) {
			toast.error("Please input a valid email!");
			return;
		}

		if (!validatePassword(password)) {
			toast.error("Password doesn't meet all the requirements");
			return;
		}

		if (password !== passwordConfirm) {
			toast.error("Passwords do not match");
			return;
		}

		let body = {
			name,
			email,
			password,
			passwordConfirm,
			userRole: "user",
			status: "active",
		};

		dispatch(registerUser(body));
	};

	useEffect(() => {
		userInfo && router.push("/profile");
	}, [userInfo]);

	useEffect(() => {
		if (error) {
			toast.error(error || "Something went wrong");
			dispatch(resetError());
		}
	}, [error]);

	useEffect(() => {
		const { name, email } = router.query;
		if (name || email) {
			setName(name || "");
			setEmail(email || "");
			document.getElementById("password")?.focus();
		}
	}, [router]);

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required("Name is required"),
			email: Yup.string()
				.email("Email is invalid")
				.required("Email is required"),
			password: Yup.string()
				.required("Password is required")
				.min(8)
		}),
		onSubmit: async (values) => {
			const { name, email, password } = values;
			console.log("values", values);
		},
	});

	const passwordStrength = {
		length: formik.values.password.length >= 8,
		uppercase: /[A-Z]/.test(formik.values.password),
		lowercase: /[a-z]/.test(formik.values.password),
		number: /[0-9]/.test(formik.values.password),
		symbol: /[!@#$%^&*]/.test(formik.values.password),
	};

	return (
		<div className={`${styles.signup_container} flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen`}>
			<Loader loading={loading} />
			<div className={`${styles.signup_nested} bg-white p-6`}>
				<div className={styles.signup_heading}>
					<div className={`${styles.backpage}`}>
						<Link href="/">
							<IoIosArrowDropleft className="text-3xl cursor-pointer ml-2" />
						</Link>
					</div>
					<h1 className="text-center text-black text-2xl leading-10">Create Your New Account</h1>
					<p className="text-center leading-4">Enter your details to get started</p>
				</div>

				{/* Social Link section */}
				<div className={styles.soical_links}>
					<p className="text-center text-base py-6">Continue With</p>
					<div className="flex justify-center items-center w-full gap-6">
						<div className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}>
							<Image src={googlelogo} alt="googlelogo" width={"20px"} height={"20px"} loading="lazy" />
							<span className="text-base leading-6 text-black">Google</span>
						</div>
						<div className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}>
							<Image src={facebooklogo} alt="googlelogo" width={"20px"} height={"20px"} loading="lazy" />
							<span className="text-base leading-6 text-black">Facebook</span>
						</div>
					</div>
				</div>

				{/* Or Section */}
				<div className={`flex justify-center gap-2 items-center my-7 ${styles.or_section}`}>
					<div></div>
					<p>Or</p>
					<div></div>
				</div>

				{/* Form section */}
				<form className={`${styles.form_signup}`} onSubmit={formik.handleSubmit}>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder="Name"
							type="text"
							label="Name"
							value={formik?.values?.name}
							onChange={formik.handleChange("name")}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder="Email"
							type="email"
							label="Email"
							value={formik?.values?.email}
							onChange={formik.handleChange("email")}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							labeluse="password"
							placeholder="Password"
							type="password"
							label="Password"
							value={formik?.values?.password}
							onChange={formik.handleChange("password")}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<li style={{ color: !!formik.values.password.length && (passwordStrength.length ? "#4bb543" : "#FF0000") }}>
							At least 8 characters
						</li>
						<li
							style={{ color: !!formik.values.password.length && (passwordStrength.uppercase ? "#4bb543" : "#FF0000") }}
						>
							Has 1 uppercase letter
						</li>
						<li
							style={{ color: !!formik.values.password.length && (passwordStrength.lowercase ? "#4bb543" : "#FF0000") }}>
							Has 1 lowercase letter
						</li>
						<li
							style={{ color: !!formik.values.password.length && (passwordStrength.number ? "#4bb543" : "#FF0000") }}
						>
							Has 1 number
						</li>
						<li
							style={{ color: !!formik.values.password.length && (passwordStrength.symbol ? "#4bb543" : "#FF0000") }}

						>
							Has 1 symbol
						</li>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder="Confirm password"
							type="password"
							label="Confirm Password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<div className={` ${styles.btn_signup}`}>
						<Button
							value={"Sign up"}
							padding="12px 0px"
							disabled={loading}
							type="submit"
						/>
					</div>
				</form>

				<div className={`text-center ${styles.login_link}`}>
					Already have an account! <Link href="/login">Log in</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
