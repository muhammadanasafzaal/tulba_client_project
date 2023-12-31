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
import { toast } from "react-hot-toast";
import { resetError } from "redux/auth/authSlice";
import Loader from "utils/Loader";
import { validateEmail, validatePassword } from "utils/functions";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setpasswordConfirm] = useState("");
	const router = useRouter();

	const { loading, userInfo, error } = useSelector(
		(state) => state.auth
	);
	const dispatch = useDispatch();

	const handleSignup = async () => {
		if(!validateEmail(email)) {
			toast.error("Please input a valid email!");
			return
		}

		if(!validatePassword(password)) {
			toast.error("Password doesn't meet all the requirements");
			return
		}

		if(password !== passwordConfirm) {
			toast.error("Passwords do not match")
			return
		}

		let body = {
			name,
			email,
			password,
			passwordConfirm,
			userRole: "vendor",
			status: "active",
		};

		dispatch(registerUser(body));
	};

	useEffect(() => {
		userInfo && router.push("/vendors/signup/details");
	}, [userInfo]);

	useEffect(() => {
		if (error) {
			toast.error(error || "Something went wrong");
			dispatch(resetError());
		}
	}, [error]);

	return (
		<div
			className={`${styles.signup_container} flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen`}
		>
			<Loader loading={loading} />
			<div className={`${styles.signup_nested} bg-white p-6`}>
				<div className={styles.signup_heading}>
					<div className={`${styles.backpage}`}>
						<Link href='/'>
							<IoIosArrowDropleft className='text-3xl cursor-pointer ml-2' />
						</Link>
					</div>
					<h1 className='text-center text-black text-2xl leading-10'>
						Are You A Vendor?
					</h1>
					<p className='text-center leading-4'>
						Enter your details to get started
					</p>
				</div>
				{/* <div className={styles.signup_heading}>
					<div className={`${styles.backpage}`}>
						<Link href='/'>
							<IoIosArrowDropleft className='text-3xl cursor-pointer ml-2' />
						</Link>
					</div>
					<h1 className='text-center text-black text-2xl leading-10'>
						Create Your New Account
					</h1>
					<p className='text-center leading-4'>
						Enter your details to get started
					</p>
				</div> */}
				{/* soical Link section */}

				{/* <div className={styles.soical_links}>
					<p className='text-center text-base py-6'>Continue With</p>

					<div className='flex justify-center items-center w-full gap-6'>
						<div
							className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
						>
							<Image
								src={googlelogo}
								alt='googlelogo'
								width={"20px"}
								height={"20px"}
								loading='lazy'
							/>{" "}
							<span className='text-base leading-6 text-black'>Google</span>
						</div>
						<div
							className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
						>
							<Image
								src={facebooklogo}
								alt='googlelogo'
								width={"20px"}
								height={"20px"}
								loading='lazy'
							/>{" "}
							<span className='text-base leading-6 text-black'>Facebook</span>
						</div>
					</div>
				</div> */}

				{/* or Section */}
				<div
					className={` flex justify-center gap-2 items-center my-7 ${styles.or_section}`}
				>
					{/* <div></div>
					<p>Or</p>
					<div></div> */}
				</div>
				{/* From section */}
				<form className={` ${styles.form_signup}`}>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Name'
							type='text'
							label='Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Email'
							type='email'
							label='Email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Password'
							type='password'
							label='Password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<li>At least 8 characters</li>
						<li>Has 1 uppercase letter</li>
						<li>Has 1 lowercase letter</li>
						<li>Has 1 number</li>
						<li>Has 1 symbol</li>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Confirm password'
							type='password'
							label='Confirm Password'
							value={passwordConfirm}
							onChange={(e) => setpasswordConfirm(e.target.value)}
						/>
					</div>
					<div className={` ${styles.btn_signup}`}>
						<Button
							type='button'
							value={"Next"}
							onClick={() => handleSignup()}
							padding='12px 0px'
							disabled={loading}
						/>
					</div>
				</form>
				<div className={` text-center ${styles.login_link}`}>
					Already have an account! <Link href='/login'>Log in</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
