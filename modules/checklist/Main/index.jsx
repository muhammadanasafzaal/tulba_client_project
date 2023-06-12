import React, { useEffect } from "react";
import styles from "styles/checklist/Main.module.scss";
import Image from "next/image";
import checkList from "../../../public/assests/checklist/checklist.png";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import AddTaskModal from "components/popup/checkList_popup";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, updateTask } from "redux/task/taskActions";
import Loader from "utils/Loader";
import { getWeddings } from "redux/wedding/weddingActions";
import { toast } from "react-hot-toast";
import { AiFillEdit } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsCheck2Circle } from "react-icons/bs";

const Main = () => {
	const [modalShow, setModalShow] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const [modalData, setModalData] = useState(null);
	const [selectedWedding, setSelectedWedding] = useState(null);
	const weddingState = useSelector((state) => state.wedding);
	const { loading, list } = useSelector((state) => state.task);
	const dispatch = useDispatch();

	const handleOpenModal = () => {
		if (!selectedWedding) {
			toast.error("Please select a wedding first");
			return;
		}

		setModalData(null);
		setIsEdit(false);
		setModalShow(true);
		setIsDelete(false);
	};

	const handleOpenEdit = (data) => {
		setIsEdit(true);
		setModalData(data);
		setModalShow(true);
		setIsDelete(false);
	};

	const handleOpenDelete = (data) => {
		setIsEdit(false);
		setIsDelete(true);
		setModalData(data);
		setModalShow(true);
	};

	const handleReset = () => {
		setModalShow(false);
		setIsEdit(false);
		setModalData(null);
		setIsDelete(false);
	};

	const handleMarkComplete = (task) => {
		const taskData = { ...task, isSuccess: !task.isSuccess };
		dispatch(updateTask({ weddingId: selectedWedding, taskData }));
		dispatch(getTasks(selectedWedding));
	};

	useEffect(() => {
		dispatch(getWeddings());
	}, []);

	useEffect(() => {
		if (selectedWedding) {
			dispatch(getTasks(selectedWedding));
		}
	}, [selectedWedding]);

	// console.log(list);

	const tasks = ["one", "one", "one", "one", "one", "one"];
	return (
		<div className={styles.main}>
			<Loader loading={loading || weddingState.loading} />
			<div className={styles.first}>
				<div className={styles.titleContainer}>
					<div className={styles.icon}>
						{/* <Image
                            src={checkList}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            objectFit='cover'
                            alt=''
                        /> */}
					</div>
					<div className={styles.title}>Checklist</div>
				</div>

				<div className={styles.date}>
					<div className={styles.icon}>
						{/* <Image
                            src={checkList}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            objectFit='cover'
                            alt=''
                        /> */}
					</div>
					<div className={styles.title}>Date</div>
				</div>
				<div className={styles.list}>
					<ul>
						<li>From 1 to 3 Months</li>
						<li>From 2 to 4 Months</li>
						<li>From 3 to 6 Months</li>
						<li>From 2 to 6 Months</li>
						<li>From 12 to 9 Months</li>
						<li>From 4 to 12 Months</li>
					</ul>
				</div>
				<div className={styles.status}>
					<div className={styles.icon}>
						{/* <Image
                            src={checkList}
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            objectFit='cover'
                            alt=''
                        /> */}
					</div>
					<div className={styles.title}>Status</div>
				</div>
				<div className={styles.subStatus}>
					<div>Done</div>
					<div>Pending</div>
				</div>
			</div>
			<div className={styles.second}>
				<div className={styles.top}>
					<div className={styles.heading}>Tasks</div>
					<div onClick={handleOpenModal} className={styles.button}>
						{" "}
						+ Add Your New Task
					</div>
					<div></div>
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
							{weddingState.list.map((c, _i) => (
								<option key={_i} value={c.id}>
									{c.groom} & {c.bride}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className={styles.desc}>
					Add your daily Tasks here and get them processed, see the Status.
				</div>
				<div className={`flex items-center ${styles.subHeading}`}>
					<div className={styles.left}>
						Search All Your Tasks | &nbsp;{" "}
						<input
							type='text'
							// onChange={handleChange}
							// value={nikkahData["eventDate"]?.split("T")?.[0] || ""}
							name='taskSearch'
							placeholder='Search here'
							className='bg-white py-2 px-3 text-gray-800 border-2'
						/>
					</div>
					<div className='mr-4 text-sm cursor-pointer font-bold'>Clear All</div>
				</div>

				<div className={styles.gray}>
					{list.length === 0 && <div>No tasks found </div>}
					{list.map((item, index) => (
						<div key={index} className={styles.task}>
							<div className={styles.corner}></div>
							<div
								className={item.isSuccess ? styles.corner : styles.cornerYellow}
							>
								{" "}
								<div></div>{" "}
							</div>
							<div className={styles.middle}>
								{item.name}
								<br />
								<span className='text-xs text-gray-600'>{item.notes}</span>
							</div>
							<div className='flex gap-4 mx-4'>
								<BsCheck2Circle
									onClick={() => handleMarkComplete(item)}
									className='cursor-pointer'
									size='1.5em'
									color={item?.isSuccess ? "#f85757" : "green"}
								/>
								<FaEdit
									onClick={() => handleOpenEdit(item)}
									className='cursor-pointer'
									size='1.5em'
								/>
								<FaTrash
									onClick={() => handleOpenDelete(item)}
									className='cursor-pointer'
									size='1.5em'
									color='#f85757'
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.third}>
				<div>icon</div>
				<div>
					<span className={styles.one}>Checklist Completion</span>
					<span className={styles.two}>Your progress of Checklist</span>
				</div>
				<div>
					<div className={styles.three}>
						<Progress
							percent={88}
							width={120}
							theme={{
								success: {
									color: "f85757",
								},
								active: {
									color: "#f85757",
								},
								default: {
									color: "#f85757",
								},
							}}
						/>
					</div>

					<div className={styles.four}>2 out of 10 tasks are completed</div>
				</div>
			</div>
			<AddTaskModal
				selectedWedding={selectedWedding}
				show={modalShow}
				onHide={() => setModalShow(false)}
				handleReset={handleReset}
				isEdit={isEdit}
				modalData={modalData}
				isDelete={isDelete}
			/>
		</div>
	);
};

export default Main;
