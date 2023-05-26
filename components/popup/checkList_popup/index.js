import { Modal, Form, Button, Row, Col } from "react-bootstrap";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/modal/guestModal.module.scss";

// render(<App />);
import React, { useEffect, useState } from "react";
import { api } from "services/api";
import { useDispatch, useSelector } from "react-redux";
import { resetError, resetSuccess } from "redux/task/taskSlice";
import { toast } from "react-hot-toast";
import Loader from "utils/Loader";
import { createTask, getTasks } from "redux/task/taskActions";

const AddTaskModal = (props) => {
	const [taskData, setTaskData] = useState();
	const { loading, success, error } = useSelector((state) => state.rsvp);
	const dispatch = useDispatch();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setTaskData({ ...taskData, [name]: value });
	};

	const onSubmit = async () => {
		dispatch(createTask({weddingId: props.selectedWedding, taskData}));
	};

	useEffect(() => {
		if (success) {
			toast.success("Successfully added");
			dispatch(getTasks(props.selectedWedding));
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
							<span className={`${styles.head} `}>Add New Task</span>
						</div>
						<div onClick={props.onHide} className={styles.closeButton}>
							X
						</div>
					</span>
					<p className={styles.subtitle}>Create new task for you task list</p>
					<Form.Group className='mb-2' controlId='formGroupEmail'>
						<Form.Label>Name</Form.Label>
						<Form.Control
							name='name'
							onChange={handleChange}
							type='text'
							placeholder='Task name'
						/>
					</Form.Group>
					<Row>
						<Col md={6}>
							<Form.Group className='mb-2' controlId='formGroupEmail'>
								<Form.Label>Date</Form.Label>
								<Form.Control
									name='taskDate'
									onChange={handleChange}
									type='date'
									placeholder='Date'
								/>
							</Form.Group>
						</Col>
						<Col md={6}>
							<Form.Group className='mb-2' controlId='formGroupEmail'>
								<Form.Label>Time</Form.Label>
								<Form.Control
									name='taskTime'
									onChange={handleChange}
									type='time'
									placeholder='Time'
								/>
							</Form.Group>
						</Col>
					</Row>
					{/* <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Label>Select Avatar</Form.Label>
                        <Form.Control type="file" placeholder="Enter avatar" />
                    </Form.Group> */}
					<Form.Group className='mb-2' controlId='formGroupEmail'>
						<Form.Label>Notes</Form.Label>
						<Form.Control
							name='notes'
							onChange={handleChange}
							type='text'
							placeholder='Description'
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
							Add Task
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

export default AddTaskModal;
