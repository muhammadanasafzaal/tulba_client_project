import Link from "next/link";
import Image from "next/image";
import fb from "public/assests/fb.svg";
import React, { useState } from "react";
import SignupPopup from "./SignupPopup";
import { FaUser } from "react-icons/fa";
import apple from "public/assests/apple.svg";
import { BsEnvelopeFill } from "react-icons/bs";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import googlelogo from "public/assests/GoogleLogo.svg";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import { useRouter } from "next/router";

const Banner = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const router = useRouter();

	const handleSubmit = () => {
		router.push(`/signup?name=${name}&email=${email}`);
	};

	return (
		<>
			<div className='container-fluid'>
				<div className="row">
					<div className='order-xs-2 col-12 col-md-6 px-[6%]'>
						{/* <div> */}
							<Breadcrumb className="d-none d-md-block">
								<Breadcrumb.Item href='/' className='brdcrumb'>
									Home
								</Breadcrumb.Item>
								<Breadcrumb.Item
									active
									className='text-[#f85757] font-semibold font-sm '
								>
									Event Planner
								</Breadcrumb.Item>
							</Breadcrumb>
						{/* </div> */}
						<div className="text-center text-md-start" id='signup'>
							<h1
								style={{ fontFamily: "DM Serif Display" }}
								className=' leading-loose text-5xl mb-0 font-bold'
							>
								Event Planner
							</h1>
							<div>
								<h5 style={{ fontFamily: "DM Serif Display" }} className='my-3'>
									Plan your wedding with our platform for free, just enter your
									name and email to get started
								</h5>
								<Row className={`g-2 my-5 flex gap-0 ${styles.form}`}>
									<Col md={4} className='btstrp p-0'>
										<FloatingLabel
											controlId='floatingInputGrid'
											label='Full Name'
										>
											<Form.Control
												type='text'
												placeholder='Name'
												className={styles.input}
												onChange={(e) => setName(e.target.value)}
												value={name}
											/>
										</FloatingLabel>
									</Col>
									<Col md={4} className='btstrp p-0'>
										<FloatingLabel controlId='floatingInputGrid' label='Email'>
											<Form.Control
												type='text'
												list='locations'
												placeholder='email'
												className={styles.input2}
												onChange={(e) => setEmail(e.target.value)}
												value={email}
											/>
										</FloatingLabel>
									</Col>

									<Col md={2} sm={12} className='p-0'>
										<Button
											onClick={handleSubmit}
											className={`px-2 ${styles.inputbtn}`}
										>
											Start planning
										</Button>
									</Col>
								</Row>
								{/* <div
					className=" w-full   mx-[0%] flex flex-col  
				lg:gap-[0px]  lg:flex-row lg:justify-start"
					>
					<div
						className={`my-2 h-14  bg-white flex gap-2 items-center   shadow-lg shadow-gray-300 pl-2 rounded-md md:border-r lg:border-[#f84747] lg:rounded-l-md md:rounded-r-none md:my-0`}
					>
						<FaUser className="text-[#f85757]  w-4 h-4" />
						<input
						type="text"
						className="focus:border-0 outline-0 w-48 h-full "
						placeholder="First Name"
						/>
					</div>
					<div
						className={`h-14 my-2 bg-white flex gap-2 items-center  pl-2    shadow-lg shadow-gray-300 rounded-md  md:border-l md:border-[#f84747] md:rounded-r-md md:rounded-l-none md:my-0`}
					>
						<BsEnvelopeFill className="text-[#f85757] w-4 h-4" />
						<input
						type="email"
						className="focus:border-0 w-48 outline-0"
						placeholder="Email"
						/>
					</div>
					<div className="my-2 py-1 h-14 lg:w-1/5 relative  ">
						<div className="bg-[#f85757]  h-full flex justify-center items-center  text-white text-[13px] rounded-[15px] cursor-pointer hover:opacity-80 md:my-0">
						Start Planning
						</div>
					</div>
					</div> */}
							</div>

							<div className='flex flex-col items-center justify-between mt-[3%] md:flex-row md:items-start'>
								<div className=''>
									<h5
										style={{ fontFamily: "GilorySemiBold" }}
										className='text-base leading-10 '
									>
										You can also sign up using:
									</h5>

									<div className='flex  justify-center md:justify-start'>
										<div className='p-2.5 h-10 w-10 border border-[#cccccc] rounded-full mx-2 hover:scale-125 cursor-pointer'>
											<Image
												src={googlelogo}
												alt='googlelogo'
												width={"20px"}
												height={"20px"}
												loading='lazy'
											/>{" "}
										</div>
										<div className='p-2.5 h-10 w-10 border border-[#cccccc] rounded-full mx-2 hover:scale-125 cursor-pointer'>
											<Image
												src={fb}
												alt='googlelogo'
												width={"20px"}
												height={"20px"}
												loading='lazy'
											/>{" "}
										</div>
										<div className='p-2.5 h-10 w-10 border border-[#cccccc] rounded-full mx-2 hover:scale-125 cursor-pointer'>
											<Image
												src={apple}
												alt='googlelogo'
												width={"20px"}
												height={"20px"}
												loading='lazy'
											/>{" "}
										</div>
									</div>
								</div>
								<div className='pr-[3%]'>
									<h5
										style={{ fontFamily: "$GilorySemiBold" }}
										className='text-base leading-10 '
									>
										Already have an account?{" "}
										<Link href='/login'>
											<span className='text-[#f85757]  cursor-pointer'>
												Log in
											</span>
										</Link>
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className='order-xs-1 col-12 col-md-6 relative '>
						{/* <div className="absolute h-full w-[70%] right-[65%]  bg-white rounded-full"></div> */}
						<div className={styles.banner_img}></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
