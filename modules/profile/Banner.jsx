import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Venue_content from "./Content";
import styles from "/styles/profile/profile.module.scss";
// import { Stepper, Step } from 'react-form-stepper';
import Congrates from "../../components/stepper_form/steps/Congrates";
import Stepper from "./../../components/stepper_form/Stepper";
import StepperControl from "./../../components/stepper_form/StepperControl";
import Account from "./../../components/stepper_form/steps/Account";
import Details from "./../../components/stepper_form/steps/Details";
import { StepperContext } from "./contexts/StepperContext";
import { api } from "services/api";
import Loader from "utils/Loader";
import { toast } from "react-hot-toast";
import Walima from "components/stepper_form/steps/Walima";

const percentage = 75;

const Banner = () => {
	const [loading, setLoading] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);
	const [userData, setUserData] = useState(initData.user);
	const [nikkahData, setNikkahData] = useState(initData.nikkah);
	const [walimaData, setWalimaData] = useState(initData.walima);
	const [eventData, setEventData] = useState([]);
	const [showSteps, setShowSteps] = useState(false);
	const [isEdit, setIsEdit] = useState(false);

	const getWedding = async () => {
		try {
			const res = await api.get("/api/v1/weddings");
			setUserData(removeEmpty(res?.data?.data[0]));
			return res?.data?.data[0].id;
		} catch (e) {
			console.log(e);
			setShowSteps(true);
			return false;
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			const wed_id = await getWedding();
			wed_id && (await getEvents(wed_id));
		};
		fetchData();
	}, []);

	const steps = ["Add Groom & Bride Info", "Nikkah", "Walima"];

	const displaySteps = (step) => {
		switch (step) {
			case 1:
				return <Account />;
			case 2:
				return <Details />;
			case 3:
				return <Walima />;
		}
	};

	const addWedding = async () => {
		setLoading(true);
		try {
			isEdit
				? await api.patch(`/api/v1/weddings/${userData.id}`, userData)
				: await api.post("/api/v1/weddings", userData);
		} catch (error) {
			if (error.response && error.response.data.message) {
				toast.error(error.response.data.message);
			} else {
				toast.error(error.message);
			}
			return false;
		} finally {
			setLoading(false);
		}
		return true;
	};

	const addEvent = async (data) => {
		setLoading(true);
		try {
			data?.id
				? await api.patch(
						`/api/v1/weddings/${userData?.id}/weddingEvents/${data?.id}`,
						data
				  )
				: await api.post(
						`/api/v1/weddings/${userData?.id}/weddingEvents`,
						data
				  );
		} catch (error) {
			if (error.response && error.response.data.message) {
				toast.error(error.response.data.message);
			} else {
				toast.error(error.message);
			}
			return false;
		} finally {
			setLoading(false);
		}
		return true;
	};

	function removeEmpty(obj) {
		return Object.fromEntries(
			Object.entries(obj).filter(([_, v]) => v != null)
		);
	}

	const getEvents = async (id = userData?.id) => {
		console.log(id);
		try {
			const res = await api.get(`/api/v1/weddings/${id}/weddingEvents`);

			res.data?.data?.map((i) => {
				if (i.type === "walima") setWalimaData(removeEmpty(i));
				else setNikkahData(removeEmpty(i));
			});
		} catch (error) {
			console.log(error);
			// return custom error message from backend if present
		}
	};

	const valideStep = async () => {
		let flag = true;
		if (currentStep === 1) {
			Object.keys(userData).map((i) => {
				if (!userData[i]) flag = false;
			});
			if (flag) flag = await addWedding();
			isEdit && (await getEvents());
		}
		if (currentStep === 2) {
			Object.keys(nikkahData).map((i) => {
				if (!nikkahData[i]) flag = false;
			});
			if (flag) flag = await addEvent(nikkahData);
		}
		if (currentStep === 3) {
			Object.keys(walimaData).map((i) => {
				if (!walimaData[i]) flag = false;
			});
			console.log(walimaData);
			if (flag) flag = await addEvent(walimaData);
		}
		!flag && toast.error("Please fill out all the fields");
		return flag;
	};

	const handleClick = async (direction) => {
		let newStep = currentStep;
		if (direction === "next") {
			if (await valideStep()) {
				await getWedding();
				newStep++;
			}
		} else if (direction === "skip") {
			newStep++;
		} else newStep--;

		// check if steps are within bounds
		newStep > 0 && newStep <= steps.length
			? setCurrentStep(newStep)
			: setShowSteps(false);
	};

	return (
		<>
			<Loader loading={loading} />
			<Container className={styles.profile}>
				<Row>
					<Col lg={3} md={6}>
						<div className='d-flex'>
							<div>
								<Venue_content client='/../assests/home_img/Male 1.svg' />
							</div>
							<div className={styles.img}>
								<Venue_content client='/../assests/home_img/Female 1.svg' />
							</div>
						</div>
					</Col>

					<Col lg={7} md={6}>
						<div className='mx-5 my-4'>
							<h1>
								{userData?.groom || "Abdullah"} weds{" "}
								{userData?.bride || "Maryam"}
							</h1>
							<p>
								Enter your wedding details and get the record of all the
								required data of your wedding.
							</p>
						</div>
					</Col>
					<Col lg={2}>
						<CircularProgressbar value={percentage} text={`${percentage}%`} />
						{!showSteps && (
							<Button
								className='mt-4 bg-transparent text-[#f85757]'
								variant='danger'
								onClick={() => {
									setCurrentStep(1);
									setShowSteps(true);
									setIsEdit(true);
								}}
							>
								Edit Wedding Details
							</Button>
						)}
					</Col>
				</Row>
				{!showSteps && (
					<Row className='mt-5'>
						<Col lg={6}>
							<div className='shadow rounded py-3 px-5 pb-4'>
								<h5 className='text-center text-[#f85757] mb-3'>Nikkah</h5>
								<div className='flex'>
									<div className='font-bold w-[100px]'>Date: </div>
									<div className=''>
										{nikkahData?.eventDate?.split("T")[0] || "N/A"}
									</div>
								</div>
								<div className='flex my-2'>
									<div className='font-bold w-[100px]'>Location: </div>
									<div className=''>{nikkahData?.eventLocation || "N/A"}</div>
								</div>
								<div className='flex'>
									<div className='font-bold w-[100px]'>Venue: </div>
									<div className=''>{nikkahData?.venue || "N/A"}</div>
								</div>
							</div>
						</Col>
						<Col lg={6}>
							<div className='shadow rounded py-3 px-5 pb-4'>
								<h5 className='text-center text-[#f85757] mb-3'>Walima</h5>
								<div className='flex'>
									<div className='font-bold w-[100px]'>Date: </div>
									<div className=''>
										{walimaData?.eventDate?.split("T")[0] || "N/A"}
									</div>
								</div>
								<div className='flex my-2'>
									<div className='font-bold w-[100px]'>Location: </div>
									<div className=''>{walimaData?.eventLocation || "N/A"}</div>
								</div>
								<div className='flex'>
									<div className='font-bold w-[100px]'>Venue: </div>
									<div className=''>{walimaData?.venue || "N/A"}</div>
								</div>
							</div>
						</Col>
					</Row>
				)}
				{showSteps && (
					<Row className='my-5'>
						<p className='text-center text-base'>
							Complete the Below process for your wedding to get started
						</p>

						{/* <Stepper activeStep={2}>
            <Step label=" Complete Your Profile" />
            <Step label=" Add Your Event" />
            <Step label=" Shop Invites & Nikkah Template" />
            <Step label=" Guest account" />
          </Stepper> */}

						{/* Stepper */}
						<div className='container horizontal mt-5'>
							<Stepper steps={steps} currentStep={currentStep} />

							{/* Display Components */}
							<div className='my-10 p-10'>
								<StepperContext.Provider
									value={{
										userData,
										setUserData,
										eventData,
										setEventData,
										nikkahData,
										setNikkahData,
										walimaData,
										setWalimaData,
									}}
								>
									{displaySteps(currentStep)}
								</StepperContext.Provider>
							</div>
						</div>

						{/* Navigation controls */}
						<StepperControl
							isEdit={isEdit}
							handleClick={handleClick}
							currentStep={currentStep}
							steps={steps}
						/>
					</Row>
				)}
			</Container>
		</>
	);
};

const initData = {
	user: {
		groom: null,
		groomLocation: null,
		bride: null,
		brideLocation: null,
	},
	nikkah: {
		type: "nikaah",
		eventLocation: null,
		eventDate: null,
		venue: null,
	},
	walima: {
		type: "walima",
		eventLocation: null,
		eventDate: null,
		venue: null,
	},
};

export default Banner;
