import { Container, Row, Col, Button } from "react-bootstrap";
import BrowseCard from "./BrowseCard";
import React, { Component } from "react";
import Slider from "react-slick";
// import "styles/global.scss"
import styles from "/styles/home/Index.module.scss";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.css";

const Browse = () => {
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
      <Container className="my-5">
        <Row>
          <Col md={12}>
            <div className={`my-4 text-center ${styles.mycards}`}>
              <h5>Comments about our clients / lets see them</h5>
              <h1 className="my-4">Browse through our premium vendors</h1>
            </div>
            <div className={`my-5  ${styles.tools}`}>
              <ul>
                <li className="">
                  <a href="#">Vendors</a>
                </li>
                <li className="">
                  <a href="#">Catering</a>
                </li>
                <li className="">
                  <a href="#">Decoration</a>
                </li>
                <li>
                  <a href="#">Florist</a>
                </li>
                <li>
                  <a href="#">Venue</a>
                </li>
              </ul>
            </div>
            <Slider {...settings} className="carousel mb-5">
              <div>
                <BrowseCard
                  imgsrc="/assests/home_img/plan1.jpeg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="300 $/"
                />
              </div>
              <div>
                <BrowseCard
                  imgsrc="/assests/home_img/plan2.jpeg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="200 $/"
                />
              </div>
              <div>
                <BrowseCard
                  imgsrc="/../assests/home_img/plan3.jpeg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="150 $/"
                />
              </div>
              <div>
                <BrowseCard
                  imgsrc="/../assests/home_img/plan4.jpeg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="100 $/"
                />
              </div>

              <div>
                <BrowseCard
                  imgsrc="/../assests/home_img/plan1.svg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="300 $/"
                />
              </div>
              <div>
                <BrowseCard
                  imgsrc="/../assests/home_img/plan2.svg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="300 $/"
                />
              </div>
              <div>
                <BrowseCard
                  imgsrc="/../assests/home_img/plan3.svg"
                  btn="Indoor and OutDoor"
                  icon="/../assests/home_img/Vector.svg"
                  price="300 $/"
                />
              </div>
            </Slider>
            <div className="text-center">
              <Link href="/vendors">
                <Button className={styles.btn}>See all vendors</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Browse;
