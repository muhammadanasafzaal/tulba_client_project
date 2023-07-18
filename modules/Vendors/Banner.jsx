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
          <Col lg={6} className={`px-[5%] banner`}>
            {/* <Breadcrumb>
              <Breadcrumb.Item href="#" className="brdcrumb"><Link href='/'>Home </Link></Breadcrumb.Item>
              <Breadcrumb.Item active className="actbrdcrumb">Vendors</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="mb-3 mb-md-5">
              <h1>Vendors</h1>
              <p className="bannerText">
                Browse through the many vendors of your choice and <br />
                get the ultimate venue for your ultmiate wedding
              </p>
            </div>
          </Col>
          <Col lg={6} className="p-0">
            <div className={style.vendorbanner_img}></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Banner;
