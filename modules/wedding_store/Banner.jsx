import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
	return (
		<>
			<Container fluid>
				<Row>
					<Col lg={6} className={`px-[5%] banner`}>
						<Breadcrumb className={`d-none d-lg-block d-lg-block d-md-block d-sm-block` } >
							<Breadcrumb.Item href='/' className='brdcrumb'>
								Home
							</Breadcrumb.Item>
							<Breadcrumb.Item active className='mt-1 actbrdcrumb brdcrumb'>
								Shop Invites
							</Breadcrumb.Item>
						</Breadcrumb>
						<div className='text-center text-md-start mb-3 mb-md-5'>
							{/* <h5 className="mt-md-5 ">We got the best tools for your event, so hop on.</h5> */}
							<h1 className="mb-2">Shop Invitation Cards</h1>
							<h5 className="banner-subheading">
								Get your items according to your budegt with our classic budget
								planner
							</h5>
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
