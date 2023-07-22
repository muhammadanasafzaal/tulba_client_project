import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
	return (
		<>
			<Container fluid className='my-2'>
				<Row>
					<Col lg={6} className={`px-[5%] banner`}>
						{/* <Breadcrumb className={styles.bread_crumb}>
							<Breadcrumb.Item href='/' className='brdcrumb'>
								Home
							</Breadcrumb.Item>
							<Breadcrumb.Item active className='actbrdcrumb'>
								Shop Invites
							</Breadcrumb.Item>
						</Breadcrumb> */}
						<div className='mb-3 mb-md-5'>
							{/* <h5 className="mt-md-5 ">We got the best tools for your event, so hop on.</h5> */}
							<h1>Shop Invitation Cards</h1>
							<p className={styles.bannerText}>
								Get your items according to your budegt with our classic budget
								planner
							</p>
						</div>
					</Col>
					<Col lg={6} className='p-0'>
						<div className={styles.weddingbanner_img}></div>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default Banner;
