import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
// import Img from "public/assests/RSVP/banner.svg";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import SummaryTable from "modules/SummaryTable";

const Banner = () => {
	return (
		// <Container fluid className='my-2 p-0'>
		<Container fluid>
			<Row>
				<Col lg={6} className={`order-xs-2 px-[5%] banner`}>
					<Breadcrumb className="d-none d-lg-block d-md-block d-sm-block">
						<Breadcrumb.Item href='/' className='brdcrumb'>
							Home
						</Breadcrumb.Item>
						<Breadcrumb.Item href='/event' className='brdcrumb'>
							Planning Tools
						</Breadcrumb.Item>
						<Breadcrumb.Item active className='mt-1 actbrdcrumb brdcrumb'>
							RSVP List
						</Breadcrumb.Item>
					</Breadcrumb>
					<div className="d-block brdcrumb d-sm-none" >
						Wedding
					</div>
					<div className='text-start text-md-center mb-3 mb-md-5'>
						<h1 className='mb-2'>RSVP List</h1>
						<h5 className="banner-subheading">
							Get Listed all your wedding items and see their progress on the
							go.
						</h5>
					</div>
				</Col>
				<Col lg={6} className="order-xs-1 mb-2 p-0 d-xs-none">
					<div className={styles.banner_img}></div>
					{/* <Image 
            src={Img}
            layout="responsive"
            /> */}
				</Col>
			</Row>
			<Col lg={4}>

				<div className={styles.bannerSummary} >
					<SummaryTable list={[]} />
				</div>
			</Col>
		</Container>
	);
};

export default Banner;
