import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/modal/guestModal.module.scss";

// render(<App />);
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	createRsvp,
	deleteRsvp,
	getRsvp,
	updateRsvp,
} from "redux/rsvp/rsvpActions";
import { resetError, resetSuccess } from "redux/rsvp/rsvpSlice";
import { toast } from "react-hot-toast";
import Loader from "utils/Loader";

const AddGuestModal = (props) => {
	const [guestData, setGuestData] = useState(props.rsvpData);
	const [isEdit, setIsEdit] = useState(props.isEdit);
	const { loading, success, error } = useSelector((state) => state.rsvp);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setGuestData({ ...guestData, [name]: value });
	};

	const onSubmit = async () => {
		const body = {
			weddingId: props.selectedWedding,
			weddingEventId: props.selectedWeddingEvent,
			guestData,
		};
		isEdit ? dispatch(updateRsvp(body)) : dispatch(createRsvp(body));
	};

	const handleDelete = async () => {
		const body = {
			weddingId: props.selectedWedding,
			weddingEventId: props.selectedWeddingEvent,
			id: guestData.id,
		};
		dispatch(deleteRsvp(body));
	};

	useEffect(() => {
		if (success) {
			toast.success("Success");

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

	useEffect(() => {
		setIsEdit(props.isEdit);
		setGuestData(props.rsvpData);
	}, [props]);

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
							<span className={`${styles.head} `}>
								{isEdit ? "Update info" : "Add New Guest"}
							</span>
						</div>
						<div onClick={props.onHide} className={styles.closeButton}>
							X
						</div>
					</span>
					<p className={styles.subtitle}>
						{isEdit
							? "Update guest info for your rsvp list"
							: "Create new guest for your rsvp list"}
					</p>
					<Row>
						<Col md={6}>
							<Form.Group className='mb-2' controlId='formGroupEmail'>
								<Form.Label>Name</Form.Label>
								<Form.Control
									name='name'
									onChange={handleChange}
									type='name'
									placeholder='John Doe'
									value={guestData?.name || ""}
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
									value={guestData?.mobile || ""}
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
							value={guestData?.email || ""}
						/>
					</Form.Group>
					{/* <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>What Kind of Venue</Form.Label>
                        <Form.Control type="email" placeholder="Enter venue" />
                    </Form.Group> */}
				</Modal.Body>
				{isEdit ? (
					<Row>
						<Col md={6}>
							<Button
								className={styles.btn}
								variant='danger'
								onClick={handleDelete}
							>
								Delete
							</Button>
						</Col>
						<Col md={6}>
							<Button
								className={styles.btn}
								onClick={onSubmit}
								variant='danger'
							>
								Update
							</Button>
						</Col>
					</Row>
				) : (
					<Row>
						<Col md={3}></Col>
						<Col md={6}>
							<Button
								className={styles.btn}
								variant='danger'
								onClick={onSubmit}
							>
								Add guest
							</Button>
						</Col>
					</Row>
				)}
			</Modal>
		</div>
	);
};

export default AddGuestModal;
