import Button from "components/form/button";
import InputField from "components/form/inputfield";
import styles from "/styles/authentication/Signup.module.scss";
import Image from "next/image";
import googlelogo from "public/assests/GoogleLogo.svg";
import facebooklogo from "public/assests/facebooklogo.svg";
import Link from "next/link";
import { useState } from "react";
import { api } from "../../../services/api";
import { IoIosArrowDropleft } from "react-icons/io";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Row, Col, FloatingLabel } from "react-bootstrap";
import { RiTodoFill } from "react-icons/ri";
// import styles from "/styles/modal/modal.module.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import Loader from "utils/Loader";

const Vendor = (props) => {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState();
	const { userInfo } = useSelector((state) => state.auth);
	const router = useRouter();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	console.log(userInfo);

	const handleSignup = async () => {
		const body = {
			...formData,
			email: userInfo.email,
		};

		try {
			setLoading(true);
			await api.post(`/api/v1/users/${userInfo.id}/vendorProfiles`, body);

			toast.success("Successfully registered")
			router.push("/profile");
		} catch (error) {
			console.error(error);
			if (error.response && error.response.data.message) {
				toast.error(error.response.data.message);
			} else {
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

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
				{/* soical Link section */}

				{/* <div className={styles.soical_links}>
          <p className="text-center text-base py-6">Continue With</p>

          <div className="flex justify-center items-center w-full gap-6">
            <div
              className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
            >
              <Image
                src={googlelogo}
                alt="googlelogo"
                width={"20px"}
                height={"20px"}
                loading="lazy"
              />{" "}
              <span className="text-base leading-6 text-black">Google</span>
            </div>
            <div
              className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
            >
              <Image
                src={facebooklogo}
                alt="googlelogo"
                width={"20px"}
                height={"20px"}
                loading="lazy"
              />{" "}
              <span className="text-base leading-6 text-black">Facebook</span>
            </div>
          </div>
        </div> */}

				{/* or Section */}
				<div
					className={` flex justify-center gap-2 items-center my-7 ${styles.or_section}`}
				>
					<div></div>
					{/* <p>Or</p> */}
					<div></div>
				</div>
				{/* From section */}
				<form className={` ${styles.form_signup}`}>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Business Name'
							type='text'
							label='Business Name'
							name='businessName'
							onChange={handleChange}
						/>
					</div>
					{/* <div className={styles.signup_inputbox}>
						<Form.Group className='mb-2' controlId='formGroupEmail'>
							<Form.Label>Default Avatar</Form.Label>
							<Form.Control type='file' placeholder='Enter avatar' />
						</Form.Group>
					</div>
					<div className={styles.signup_inputbox}>
						<Form.Group className='mb-2' controlId='formGroupEmail'>
							<Form.Label>Upload Pics</Form.Label>
							<Form.Control type='file' placeholder='Upload Pics' />
						</Form.Group>
					</div> */}
					{/* <div className={styles.signup_inputbox}>
            <InputField
              placeholder="Enter Category"
              type="text"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div> */}
					<div className={styles.signup_inputbox}>
						<Form.Label>Select Category</Form.Label>
						<Row>
							<Col className={styles.category}>
								<FloatingLabel controlId='floatingSelect'>
									<Form.Select
										name='category'
										onChange={handleChange}
										aria-label='Floating label select example'
										className='py-3'
									>
										<option className='hidden'>Select Category</option>
										<option value='Catering'>Catering</option>
										<option value='Decoration'>Decoration</option>
										<option value='Venue'>Venue</option>
										<option value='Florist'>Florist</option>
									</Form.Select>
								</FloatingLabel>
							</Col>
						</Row>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Enter Contact'
							type='number'
							label='Contact Details'
							name='contactPerson'
							onChange={handleChange}
						/>
					</div>
					<div className={styles.signup_inputbox}>
						<div className='flex justify-between'>
							<InputField
								placeholder='Telephone'
								name='tel'
								type='text'
								label='Tel'
								onChange={handleChange}
							/>
							<InputField
								placeholder='Enter Mobile'
								name='mobile'
								type='text'
								label='Mobile'
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={styles.signup_inputbox}>
						<div className='flex justify-between'>
							<InputField
								placeholder='Enter Street Address'
								name='streetAddress'
								type='text'
								label='Street Address'
								onChange={handleChange}
							/>
							<InputField
								placeholder='Enter City'
								name='city'
								type='text'
								label='City'
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={styles.signup_inputbox}>
						<div className='flex justify-between'>
							<InputField
								placeholder='Enter Province'
								name='stateProvince'
								type='text'
								label='State Province'
								onChange={handleChange}
							/>
							<InputField
								placeholder='Enter Country'
								name='country'
								type='text'
								label='Country'
								onChange={handleChange}
							/>
						</div>
					</div>
					<div className={styles.signup_inputbox}>
						<InputField
							placeholder='Add Location'
							type='text'
							label='Location'
						/>
					</div>

					<div className={` ${styles.btn_signup}`}>
						<Button
							type='button'
							value={"Sign Up"}
							onClick={() => handleSignup()}
							padding='12px 0px'
						/>
					</div>

					{/* <div className={`{styles.signup_inputbox} `}>
            <div className="bg-red-500 opacity-95 text-white lg:px-2 lg:py-2 font-semibold text-base   rounded-3xl sm:hidden md:hidden lg:flex lg:justify-center ">
              Premium Vendors are displayed on front page
            </div>
          </div> */}
				</form>
				<div className={` text-center ${styles.login_link}`}>
					{/* Already have an account! <Link href="/loginin"> Log in now</Link> */}
				</div>
			</div>
			{/* <Row>
        <Col md={6}>
          <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label>Groom Name</Form.Label>
            <Form.Control type="email" placeholder="John Doe" />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-2" controlId="formGroupEmail">
            <Form.Label>Bride Name</Form.Label>
            <Form.Control type="email" placeholder="Alexa" />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Select Avatar</Form.Label>
        <Form.Control type="file" placeholder="Enter avatar" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>Location</Form.Label>
        <Form.Control type="email" placeholder="ABC Road" />
      </Form.Group>
      <Form.Group className="mb-2" controlId="formGroupEmail">
        <Form.Label>What Kind of Venue</Form.Label>
        <Form.Control type="email" placeholder="Enter venue" />
      </Form.Group>

      <Row>
        <Col md={6}>
          <Button
            className={styles.btn}
            variant="danger"
            onClick={props.onHide}
          >
            Add Task
          </Button>
        </Col>
        <Col md={6}>
          <Button
            className={styles.btn}
            variant="danger"
            onClick={props.onHide}
          >
            Close
          </Button>
        </Col>
      </Row> */}
		</div>
	);
};

export default Vendor;
