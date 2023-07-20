import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
import Img from "public/assests/RSVP/banner.svg";
import styles from "/styles/checklist/Banner.module.scss";

const Banner = () => {
	return (
		<Container fluid className='mt-2 mb-2 p-0'>
			<Row>
				<Col lg={6} className={`order-xs-2 px-[5%] banner`}>
					{/* <Breadcrumb>
						<Breadcrumb.Item href='/' className='brdcrumb'>
							Home
						</Breadcrumb.Item>
						<Breadcrumb.Item href='/event' className='brdcrumb'>
							Planning Tools
						</Breadcrumb.Item>
						<Breadcrumb.Item active className='actbrdcrumb'>
							Checklist
						</Breadcrumb.Item>
					</Breadcrumb> */}
					<div className='text-md-start text-center mb-3 mb-md-5'>
						<h1 className='mb-2'>Checklist</h1>
						<p>
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
            alt="checklist Cover"
            /> */}
				</Col>
			</Row>
		</Container>
	);
};

export default Banner;
