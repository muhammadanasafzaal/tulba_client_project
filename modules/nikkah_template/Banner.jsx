import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/Rsvp/Rsvp.module.scss";

const Banner = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6} className={`order-xs-2 px-[5%] banner`}>
            <Breadcrumb className={`${styles.bread_crumb} d-none d-lg-block d-md-block d-sm-block`}>
              <Breadcrumb.Item href="/" className="brdcrumb">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="actbrdcrumb brdcrumb">
                Shop Nikkah Templates
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="d-block brdcrumb d-sm-none" >
              Wedding
            </div>
            <div className="text-start mb-3 mb-md-5">
              <h1>Shop Nikkah Templates</h1>
              <p className="banner-subheading">
                Get your items according to your budegt with our classic budget
                planner
              </p>
            </div>
          </Col>
          <Col lg={6} className="order-xs-1 p-0 mb-3 d-xs-none">
            <div className={styles.weddingbanner_img}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
