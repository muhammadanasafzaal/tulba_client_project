import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
  return (
    <div>
      <Container fluid className="my-2">
        <Row>
          <Col lg={6} className={`order-xs-2 px-[5%] banner`}>
            <Breadcrumb className='d-lg-block d-md-block d-sm-block d-none'>
              <Breadcrumb.Item href="/" className="brdcrumb">Home</Breadcrumb.Item>
              <Breadcrumb.Item active className="actbrdcrumb">Event Website</Breadcrumb.Item>
            </Breadcrumb>
            <div className="d-block brdcrumb d-sm-none" >
              Wedding
            </div>
            <div className='text-start text-md-center mb-3 mb-md-5'>
              <h1>Event Website</h1>
              <p className='banner-subheading' >
                Get your items according to your budegt with our classic budget planner
              </p>
            </div>
          </Col>
          <Col lg={6} className='order-xs-1 mb-2 d-xs-none'>
            <div className={styles.wedbanner_img}></div>
            {/* <Image 
            src={Img}
            layout="responsive"
            /> */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner