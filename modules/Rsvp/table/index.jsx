import { Container, Row, Col, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { RiTodoFill } from "react-icons/ri";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import Image from "next/image";
import Rectangle2 from "public/assests/home_img/Rectangle 374.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Pagination from "react-bootstrap/Pagination";
import AddGuestModal from "components/popup/guest_popup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRsvp } from "redux/rsvp/rsvpActions";
import Loader from "utils/Loader";
import { api } from "services/api";
import { getWeddings } from "redux/wedding/weddingActions";
import { getWeddingEvents } from "redux/weddingEvent/weddingEventActions";
import { toast } from "react-hot-toast";
import { resetList } from "redux/rsvp/rsvpSlice";
import { FaEdit } from "react-icons/fa";
import SummaryTable from "modules/SummaryTable";
import Filter from "../Filter";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
	items.push(
		<Pagination.Item key={number} active={number === active}>
			{number}
		</Pagination.Item>
	);
}

function BasicExample() {
	const [modalShow, setModalShow] = useState(false);
	const [selectedWedding, setSelectedWedding] = useState(null);
	const [selectedWeddingEvent, setSelectedWeddingEvent] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [rsvpData, setRsvpData] = useState(null);
	const [rsvpStatus, setRsvpStatus] = useState(false)
	const [weddingEvents, setWeddingEvents] = useState([
		{
			id: 1,
			type: "Nikkah",
			date: 'November 11, 2023'
		},
		{
			id: 2,
			type: "Valima",
			date: 'November 18, 2023'
		}
	])
	const [tmpRsvp, setTmpRsvp] = useState([
		{
			id: 1,
			name: 'Ali Ahmed',
			mobile: '+122121212',
			email: 'test@gmail.com',
			isInvited: true
		},
		{
			id: 22,
			name: 'Sarah Ahmed',
			mobile: '+122121212',
			email: 'test2@gmail.com',
			isInvited: true
		},
	])
	const weddingState = useSelector((state) => state.wedding);
	const weddingEventState = useSelector((state) => state.weddingEvent);
	const { loading, list } = useSelector((state) => state.rsvp);
	const dispatch = useDispatch();
	const handleOpenModal = () => {
		if (!selectedWedding || !selectedWeddingEvent) {
			toast.error("Please select wedding and wedding event");
			return;
		}

		setRsvpData(null);
		setIsEdit(false);
		setModalShow(true);
	};

	const handleOpenEdit = (item) => {
		setIsEdit(true);
		setRsvpData(item);
		setModalShow(true);
	}

	useEffect(() => {
		dispatch(getWeddings());
	}, []);

	useEffect(() => {
		if (selectedWedding) {
			dispatch(getWeddingEvents(selectedWedding));
			setSelectedWeddingEvent(null);
			dispatch(resetList());
		}
	}, [selectedWedding]);

	useEffect(() => {
		if (selectedWedding && selectedWeddingEvent) {
			const body = {
				weddingId: selectedWedding,
				weddingEventId: selectedWeddingEvent,
			};
			dispatch(getRsvp(body));
		}
	}, [selectedWeddingEvent]);

	console.log("weddingEvents", weddingEventState.list);


	return (
		<Container className={`my-5 ${styles.rsvp_page}`}>
			<Loader
				loading={loading || weddingState?.loading || weddingEventState?.loading}
			/>
			<AddGuestModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				setModalShow={setModalShow}
				selectedWedding={selectedWedding}
				selectedWeddingEvent={selectedWeddingEvent}
				isEdit={isEdit}
				rsvpData={rsvpData}
			/>
			<Row>
				<Col lg={3} className={` ${styles.vendors}`}>
					<Filter />
				</Col>
				<Col lg={6} className={`p-md-0 ${styles.rsvp}`}>
					<Row>
						<Col lg={5} className='p-md-0'>
							<span className='d-flex justify-content-start'>
								<RiTodoFill className={`mt-4 ${styles.icon}`} />
								<span className={styles.head}>RSVP LIST</span>
							</span>
							<p className=''>Your Invitations to the guests details</p>
						</Col>
						<Col xs="12" lg={4} className='p-md-0'>
							<Button onClick={handleOpenModal} className={styles.btn}>
								+ Add New Guest
							</Button>
						</Col>
						{/* <Col lg={3} md={12} className="rsvptable"> */}
						{/* <FloatingLabel controlId="floatingSelect" className="my-4 ">
                <Form.Select aria-label="Floating label select example">
                  <option className="hidden">Invited</option>
                  <option className="cursor-pointer" value="1">
                    Yes
                  </option>
                  <option value="2">No</option>
                </Form.Select>
              </FloatingLabel> */}
						{/* </Col> */}
						{/* <Row className='mt-2'> */}
						{/* <Col lg={6}>
								<div className='bg-white p-2 flex border border-gray-200 rounded'>
									<select
										className='bg-white p-1 px-2 outline-none w-full text-gray-800 cursor-pointer'
										name='weddingSelect'
										onChange={(e) => setSelectedWedding(e.target.value)}
									// onChange={handleChange}
									>
										<option hidden value={null}>
											Select wedding
										</option>
										{weddingState?.list.map((c, _i) => (
											<option key={_i} value={c.id}>
												{c.groom} & {c.bride}
											</option>
										))}
									</select>
								</div>
							</Col> */}
						<Col xs="12" sm="6" md="6" className="mt-2">
							<div className='bg-white p-2 flex border border-gray-200 rounded'>
								<select
									// key={Math.random()}
									className=' bg-white p-1 px-2 outline-none w-full text-gray-800 cursor-pointer'
									name='weddingEventSelect'
									onChange={(e) => setSelectedWeddingEvent(e.target.value)}
								// onChange={handleChange}
								>
									<option hidden value={null}>
										Select event
									</option>
									{/* {weddingEventState?.list?.map((c, _i) => (
											<option key={c.id} value={c.id}>
												{c.type} <sub>{c.date}</sub>
											</option>
										))} */}
									{weddingEvents.map((c, _i) => (
										<option key={c.id} value={c.id}>
											{c.type} <sub>{c.date}</sub>
										</option>
									))}
								</select>
							</div>
						</Col>
						{/* <Col className="d-xs-none" md="2"></Col>
						<Col xs="8" sm="6" md="2" className="d-flex justify-start align-items-center mt-md-0 mt-2">
							<button className="btnoutline p-2">
								Done
							</button>
							<button className="btnoutline p-2 ml-2">
								Pending
							</button>
						</Col>
						<Col xs="4" sm="6" md="2" className="d-flex justify-end align-items-center">
							<div className='text-sm cursor-pointer font-bold '>Clear All</div>
						</Col> */}
						{/* </Row> */}
					</Row>
					<Table
						responsive
						striped
						hover
						className='table-responsive mt-4 rsvptable text-center'
					>
						<thead>
							<tr>
								<th></th>
								<th></th>
								{/* <th>Name</th> */}
								{/* <th>Mobile</th>
								<th>Email</th>
								<th>Invited</th> */}
								<th></th>
							</tr>
						</thead>
						<tbody>
							{/* {list.length === 0 && <div>You do not have any guest yet.</div>} */}
							{/* {list.map((i, _i) => (
								<tr key={_i}>
									<td>{i?.name}</td>
									<td>{i?.mobile}</td>
									<td>{i?.email}</td>
									<td>{i?.isInvited ? "Yes" : "No"}</td>
									<td>
										<FaEdit
											onClick={() => handleOpenEdit(i)}
											className='cursor-pointer m-1'
											size='1.5em'
										/>
									</td>
								</tr>
							))} */}

							{tmpRsvp.map((i, _i) => (
								<tr key={_i}>
									<td className="relative">
										<input
											type="checkbox"
											style={{
												position: 'absolute',
												top: '18%',
												left: '50%',
												transform: 'translate(-50%, -18%)'
											}}
										// className="appearance-none"
										/>
									</td>
									<td className="text-start">
										<p className="ms-0">{i?.name}</p>
										<small className="d-block">{i?.mobile}</small>
										<small>{i?.email}</small>
									</td>
									{/* <td>{i?.mobile}</td>
									<td>{i?.email}</td>
									<td>{i?.isInvited ? "Yes" : "No"}</td> */}
									<td className="relative">
										<div className="d-flex justify-center align-items-center mt-1">
											<FaEdit
												onClick={() => setTaskStatus(!rsvpStatus)}
												className='cursor-pointer d-inline ml-2'
												size='1.5em'
											/>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<div className='d-flex justify-content-center py-5'>
						<Pagination size='md'>{items}</Pagination>
					</div>
				</Col>
				{/* <Col lg={12} className=''>
				</Col> */}
				<Col lg={3}>
					<div className={styles.bottomSummaryTable} >
						<SummaryTable list={list} />
					</div>
				</Col>
			</Row>
		</Container>
	);
}

export default BasicExample;
