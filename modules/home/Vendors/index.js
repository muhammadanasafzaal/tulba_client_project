import React, { Component } from "react";
import Slider from "react-slick";
import VendorCard from "./VendorCard";
import styles from "/styles/home/Index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Vendors = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container className="my-2">
        <Row>
          <Col>
            <div className={`text-center my-5 ${styles.vendors}`}>
              <h5>Easy access of cards, amd essentials on the go</h5>
              <h1>
                Browse Our Store for <br /> Nikkah and Invitations
              </h1>
            </div>
            <div>
              <Slider {...settings}>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/card.svg"
                    title="Nikkah Nama Style 1"
                    onclick="/nikkah-card-red"
                  />
                </div>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/card.svg"
                    title="Nikkah Nama Style 2"
                    onclick="/nikkah-card-yellow"
                  />
                </div>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/invitationcard.svg"
                    title="Invitation Card 1"
                    onclick="/asthetical"
                  />
                </div>
                <div>
                  <VendorCard
                    imgsrc="/../assests/home_img/invitationcard.svg"
                    title="Invitation Card 1"
                    onclick="/asthetical"
                  />
                </div>
              </Slider>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Vendors;
