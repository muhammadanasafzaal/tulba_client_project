import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/modal/guestModal.module.scss";

// render(<App />);
import React, { useEffect, useState } from "react";
import { api } from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { createRsvp, getRsvp } from "redux/rsvp/rsvpActions";
import { resetError, resetSuccess } from "redux/rsvp/rsvpSlice";
import { toast } from "react-hot-toast";
import Loader from "utils/Loader";

const AddGuestModal = (props) => {
	const [guestData, setGuestData] = useState();
	const { loading, list, success, error } = useSelector((state) => state.rsvp);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setGuestData({ ...guestData, [name]: value });
	};

	const onSubmit = async () => {
		const body = {
			weddingId: props.selectedWedding,
			weddingEventId: props.selectedWeddingEvent,
			guestData
		}
		dispatch(createRsvp(body));
	};

	useEffect(() => {
		if (success) {
			toast.success("Successfully added");

			const body = {
				weddingId: props.selectedWedding,
				weddingEventId: props.selectedWeddingEvent,
			};
			dispatch(getRsvp(body));
			dispatch(resetSuccess());
			props.setModalShow(false);
		}
	}, [success, props]);

	useEffect(() => {
		if (error) {
			console.log(error);
			toast.error(error || "Something went wrong");
			dispatch(resetError());
		}
	}, [error]);

	return (
		<div className='absolute left-20  '>
			<Loader loading={loading} />
			<Modal
				{...props}
				size='md'
				aria-labelledby='contained-modal-title-vcenter'
				className='pro-modal '
			>
				<Modal.Body>
					<span className='d-flex justify-content-between  items-center'>
						<div className='d-flex justify-content-start  items-center'>
							<RiTodoFill className={` ${styles.icon} `} />
							<span className={`${styles.head} `}>Add New Guest</span>
						</div>
						<div onClick={props.onHide} className={styles.closeButton}>
							X
						</div>
					</span>
					<p className={styles.subtitle}>Create new guest for your rsvp list</p>
					<Row>
						<Col md={6}>
							<Form.Group className='mb-2' controlId='formGroupEmail'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									name='name'
									onChange={handleChange}
									type='name'
									placeholder='John Doe'
								/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className='mb-2' controlId='formGroupEmail'>
								<Form.Label>Mobile</Form.Label>
								<Form.Control
									name='mobile'
									onChange={handleChange}
									type='text'
									placeholder='+1234'
								/>
							</Form.Group>
						</Col>
					</Row>
					{/* <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>Select Avatar</Form.Label>
                        <Form.Control type="file" placeholder="Enter avatar" />
                    </Form.Group> */}
					<Form.Group className='mb-2' controlId='formGroupEmail'>
						<Form.Label>Email</Form.Label>
						<Form.Control
							name='email'
							onChange={handleChange}
							type='email'
							placeholder='name@example.com'
						/>
					</Form.Group>
					{/* <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>What Kind of Venue</Form.Label>
                        <Form.Control type="email" placeholder="Enter venue" />
                    </Form.Group> */}
				</Modal.Body>
				<Row>
					<Col md={3}></Col>
					<Col md={6}>
						<Button className={styles.btn} variant='danger' onClick={onSubmit}>
							Add Guest
						</Button>
					</Col>
					{/* <Col md={6}>
                        <Button className={styles.btn} variant="danger" onClick={props.onHide}>Close</Button>
                    </Col> */}
				</Row>
			</Modal>
		</div>
	);
};

export default AddGuestModal;
