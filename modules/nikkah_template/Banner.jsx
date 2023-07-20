import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
  return (
    <>
      <Container fluid className="my-2">
        <Row>
          <Col lg={6} className={`order-xs-2 px-[5%] banner`}>
            <Breadcrumb className={`${styles.bread_crumb} d-none d-lg-block d-md-block d-sm-block`}>
              <Breadcrumb.Item href="/" className="brdcrumb">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="actbrdcrumb">
                Shop Nikkah Templates
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="text-center text-md-start mb-3 mb-md-5">
              <h1>SHOP NIKKAH TEMPLATES</h1>
              <p className="bannerText">
                Get your items according to your budegt with our classic budget
                planner
              </p>
            </div>
          </Col>
          <Col lg={6} className="order-xs-1 p-0 mb-3">
            <div className={styles.weddingbanner_img}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
