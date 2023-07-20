import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
// import Img from "public/assests/RSVP/banner.svg";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import SummaryTable from "modules/SummaryTable";

const Banner = () => {
	return (
		<Container fluid className='my-2 p-0'>
			<Row>
				<Col lg={6} className={`order-xs-2 px-[5%] banner`}>
					<Breadcrumb className="d-none d-lg-block d-md-block d-sm-block">
						<Breadcrumb.Item href='/' className='brdcrumb'>
							Home
						</Breadcrumb.Item>
						<Breadcrumb.Item href='/event' className='brdcrumb'>
							Planning Tools
						</Breadcrumb.Item>
						<Breadcrumb.Item active className='actbrdcrumb'>
							RSVP List
						</Breadcrumb.Item>
					</Breadcrumb>
					<div className='text-center text-md-start mb-3 mb-md-5'>
						<h1 className='mb-2'>RSVP List</h1>
						<p className={styles.bannerText}>
							Get Listed all your wedding items and see their progress on the
							go.
						</p>
					</div>
				</Col>
				<Col lg={6} className="order-xs-1 mb-2">
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
