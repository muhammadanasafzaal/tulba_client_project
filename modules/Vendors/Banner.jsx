import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Image from "next/image";
// import Img from "public/assests/vendors/banner.svg";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import style from "/styles/vendors/vendor.module.scss";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <Container fluid >
        <Row>
          <Col lg={6} className={`order-xs-2 px-[5%] banner`}>
            <Breadcrumb className="d-none d-lg-block d-lg-block d-md-block d-sm-block">
              <Breadcrumb.Item href="#" className="brdcrumb">
                <Link href='/'>Home </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item active className="actbrdcrumb brdcrumb mt-1">
                <Link href='#'>Vendors </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="d-block brdcrumb d-sm-none" >
              Wedding
            </div>
            <div className="text-start mb-3 mb-md-5">
              <h1>Vendors</h1>
              <h5 className="banner-subheading">
                Browse through the many vendors of your choice and <br className="d-xs-none" />
                get the ultimate venue for your ultmiate wedding
              </h5>
            </div>
          </Col>
          <Col lg={6} className="order-xs-1 mb-2 p-0 d-xs-none">
            <div className={style.vendorbanner_img}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
