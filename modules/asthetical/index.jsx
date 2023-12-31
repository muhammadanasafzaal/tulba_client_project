/* eslint-disable jsx-a11y/alt-text */
import React, { Component, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import MyCarousel from "./MyCarousel";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styles from "/styles/asthetical/aesthetical.module.scss";
import Image from "next/image";
import Img from "public/assests/asthetical/ant_design.svg";
import Link from "next/link";

const Asthetical = () => {
  const [color, setColor] = useState("White");
  const [type, setType] = useState("Paper");
  const [size, setSize] = useState("Petito");
  const [foil, setFoil] = useState("None");
  const [paperType, setPaperType] = useState("Smooth");
  const [sillhoutte, setSillhoutte] = useState("Square");

  return (
    <div>
      <Container>
        {/* <Row>
          <Col lg={12} className={` ${styles.banner}`}>
            <Breadcrumb  >
              <Breadcrumb.Item href="#" className={styles.brdcrumb}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="#" className={styles.brdcrumb}>
                Template
              </Breadcrumb.Item>
              <Breadcrumb.Item active className={styles.actbrdcrumb}>
                Asthetical
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row> */}
        <Row>
          <Col lg={6} md={8} sm={12}>
            <MyCarousel />
          </Col>
          <Col lg={6} md={8} sm={12} className={`px-3 ${styles.asthetical}`}>
            <div className="d-flex">
              <h2>The Asthetical</h2>
              <h6 className="py-3 mx-3 my-0">
                Starting from <span className="flex my-3"> $29</span>
              </h6>
            </div>
            <p>Made by Tulba Designers</p>
            {/* <h5 className="my-5">What’s good in this ?</h5>
            <div>
              <input type="checkbox" className="bg-white" name="" id="" />
              <span className={styles.check}>Print on both sides</span>
            </div>
            <div>
              <input type="checkbox" className="bg-white" name="" id="" />
              <span className={styles.check}>Free Shipping from us</span>
            </div>
            <div>
              <input type="checkbox" className="bg-white" name="" id="" />
              <span className={styles.check}>Free Envelope</span>
            </div>
            <div>
              <input type="checkbox" className="bg-white" name="" id="" />
              <span className={styles.check}>Free Addressing</span>
            </div>
            <div>
              <input type="checkbox" className="bg-white" name="" id="" />
              <span className={styles.check}>Matching Cards</span>
            </div>
            <div>
              <input type="checkbox" className="bg-white" name="" id="" />
              <span className={styles.check}>Free Quick Change Date.</span>
            </div> */}
            <div>
              <Link href="/">
                <Button className={styles.as_btn}>
                  <div className="d-flex justify-content-center">
                    <Image src={Img} />
                    <p style={{ marginTop: '1.3rem' }}> Get a free sample from us</p>
                  </div>
                </Button>
              </Link>
            </div>
            <div className="my-5">
              <hr className="my-5" />
            </div>
            <div
              className={`${styles.quantityContainer} mb-4 `} >
              <div>
                <p className={`${styles.text} ml-0`}>Quantity :</p>
              </div>
              <div className={styles.last} style={{ justifyContent: 'flex-start' }}>
                <div className={`${styles.select} ml-0`}>
                  <select name="" className="bg-white" id="">
                    <option value="1">1</option>
                    <option value="1">1</option>
                    <option value="1">1</option>
                  </select>
                </div>
                <div className={styles.button}>
                  {" "}
                  <Link href="/checkout">Buy now</Link>{" "}
                </div>
              </div>
            </div>

            <div className="mb-2">
              <div>
                <div lg={3}>
                  Color: <p className={styles.text}> {color}</p>{" "}
                </div>
              </div>

              <div className={`${styles.colorContainer} mt-2`}>
                <div className={styles.white}>
                  <input
                    type="radio"
                    id="color"
                    name="color"
                    onClick={() => {
                      setColor("White");
                    }}
                    className="appearance-none"

                  />
                </div>

                <div className={styles.black}>
                  <input
                    className="appearance-none"
                    type="radio"
                    id="color"
                    name="color"
                    onClick={() => {
                      setColor("Black");
                    }}
                  />
                </div>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <div>
                <div lg={3}>
                  Type: <p className={styles.text}> {type} </p>
                </div>
              </div>

              <div className={styles.buttons}>
                <div
                  className={`${styles.button} ${type === "Paper" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setType("Paper");
                  }}
                >
                  Paper
                </div>
                <div
                  className={`${styles.button} ${type === "Magnet" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setType("Magnet");
                  }}
                >
                  Magnet
                </div>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <div>
                <div lg={3}>
                  Size:<p className={styles.text}> {size} </p>{" "}
                </div>
              </div>

              <div className={styles.buttons}>
                <div
                  className={`${styles.button} ${size === "Petito" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setSize("Petito");
                  }}
                >
                  Petito
                </div>
                <div
                  className={`${styles.button} ${size === "Classic" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setSize("Classic");
                  }}
                >
                  Classic
                </div>
                <div
                  className={`${styles.button} ${size === "Post Card" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setSize("Post Card");
                  }}
                >
                  Post Card
                </div>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <div>
                <div lg={3}>
                  Foil Color: <p className={styles.text}> {foil} </p>{" "}
                </div>
              </div>

              <div className={styles.buttons}>
                <div
                  className={`${styles.button} ${foil === "None" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setFoil("None");
                  }}
                >
                  None
                </div>
                <div
                  className={`${styles.button} ${foil === "Yellow" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setFoil("Yellow");
                  }}
                >
                  Yellow
                </div>
                <div
                  className={`${styles.button} ${foil === "Silver" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setFoil("Silver");
                  }}
                >
                  Silver
                </div>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <div>
                <div lg={3}>
                  Foil Color: <p className={styles.text}> {paperType}</p>{" "}
                </div>
              </div>

              <div className={styles.buttons}>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Smooth" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Smooth");
                  }}
                >
                  Smooth
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "EggShell" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("EggShell");
                  }}
                >
                  EggShell
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Recycle" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Recycle");
                  }}
                >
                  Recycle
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Pearlescent" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Pearlescent");
                  }}
                >
                  Pearlescent
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Linen" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Linen");
                  }}
                >
                  Linen
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Natural" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Natural");
                  }}
                >
                  Natural
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Double Thick" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Double Thick");
                  }}
                >
                  Double Thick
                </div>
                <div
                  className={`mb-3 ${styles.button} ${paperType === "Triple Thick" ? styles.active : ""
                    } `}
                  onClick={() => {
                    setPaperType("Triple Thick");
                  }}
                >
                  Triple Thick
                </div>
              </div>
            </div>

            <div className={styles.btnContainer}>
              <div>
                <div>
                  Sillhoutte: <p className={styles.text}> {sillhoutte}</p>{" "}
                </div>
              </div>
              {/* <div>Assets??</div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Asthetical;