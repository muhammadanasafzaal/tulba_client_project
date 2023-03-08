import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "/styles/profile/profile.module.scss";
import Image from "next/image";
import boxImage from "public/assests/venue/Rectangle.svg";

const Temp = () => {
  return (
    <div>
      <Container className={styles.temp}>
        <Row classname="my-5 py-5">
          <Col lg={12} className="my-5 flex justify-between items-start">
            <div>
              <h2>Venue and Vendor</h2>
              <span>List of your selectd Venues and Vendores</span>
            </div>
            <a
              href="#"
              style={{
                color: "#F85757",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              View more
            </a>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  {" "}
                  <Image
                    src={boxImage}
                    width={"130px"}
                    height={"130px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row classname="my-5">
          <Col lg={12} className="my-5 flex justify-between items-start">
            <div>
              <h2>Guests and RSVP</h2>
              <span>List of your selectd Venues and Vendores</span>
            </div>
            <a
              href="#"
              style={{
                color: "#F85757",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              View more
            </a>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  {" "}
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row classname="my-5">
          <Col lg={12} className="my-5 flex justify-between items-start">
            <div>
              <h2>Your Save The Dates & Invitations</h2>
              <span>List of your selectd Venues and Vendores</span>
            </div>
            <a
              href="#"
              style={{
                color: "#F85757",
                textDecoration: "none",
                textTransform: "uppercase",
              }}
            >
              View more
            </a>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  {" "}
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-5 pb-5">
            <div className={styles.box}>
              <div className="d-flex justify-content-center">
                <div>
                  <Image
                    src={boxImage}
                    width={"125px"}
                    height={"125px"}
                    layout="fixed"
                    alt="template"
                  />
                </div>
                <div className="mx-2">
                  <h5>Got Started with hand picked recs</h5>
                  <span className={styles.para}>
                    Dummy text of the printing and lorem ipsum.dummy text of the
                    printing and lorem ipsum.
                  </span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Temp;
