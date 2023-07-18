import React from 'react'
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
  return (
    <div>
      <Container fluid className="my-2">
        <Row>
          <Col lg={6} className={`px-[5%] banner`}>
            <Breadcrumb>
              <Breadcrumb.Item href="/" className="brdcrumb">Home</Breadcrumb.Item>
              <Breadcrumb.Item active className="actbrdcrumb">Event Website</Breadcrumb.Item>
            </Breadcrumb>
            <div className='mb-3 mb-md-5'>
              <h1>Event Website</h1>
              <p>
                Get your items according to your budegt with our classic budget planner
              </p>
            </div>
          </Col>
          <Col lg={6}>
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