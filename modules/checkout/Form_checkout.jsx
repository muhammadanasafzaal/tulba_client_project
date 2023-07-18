import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "styles/Form/Form.module.scss";

const Form_checkout = () => {
  return (
    <>
      <Container className={`my-5 mt-md-5 mt-2 ${styles.forms}`}>
        <Row className="flex justify-between items-center gap p-3 p-md-1">
          <Col lg={6} sm={12} className="checkForms p-0">
            <h1>CheckOut</h1>
            <p className="mb-5">All orders of your carts are here.</p>
            <Form>
              <Row>
                <Form.Group as={Col} lg={6} sm={12} controlId="formGridEmail" className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" value="Waleed" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg={6}
                  sm={12}
                  controlId="formGridPassword"
                  className="mb-3"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group as={Col} lg={6} sm={12} controlId="formGridEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group
                  as={Col}
                  lg={6}
                  sm={12}
                  controlId="formGridPassword"
                  className="mb-3"
                >
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Row>

              <Row>
                <Form.Group as={Col} lg={4} sm={12} controlId="formGridCity" className="mb-3">
                  <Form.Label>Apt</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} lg={4} sm={12} controlId="formGridCity" className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} lg={4} sm={12} controlId="formGridZip" className="mb-3">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>
              <Row>
                <Col lg={8}>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" className={`mt-4 ${styles.check_btn}`}>
                Continue
              </Button>
            </Form>
          </Col>
          <Col lg={6} sm={12} xs={12} className="p-0">
            <div className={`p-5 ${styles.orderSummary}`}>
              <h2>Order Summary</h2>
              <div className="d-flex justify-content-between py-3">
                <span>Subtotal</span>
                <span>$120</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="d-flex justify-content-between py-3">
                <span>Quantity</span>
                <span>1</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between py-3">
                <h5>Total</h5>
                <h5>$120</h5>
              </div>
              <button
                type="submit"
                className={`mt-2 text-white ${styles.check_btn1}`}
              >
                Place Order
              </button>
              <Row className="checkForms my-2">
                <Col lg={7} className="my-4">
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Promo Code</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col lg={5} className="mt-5">
                  <Button
                    variant="outline-danger"
                    className={`mt-2 w-28 ${styles.applyBtn} `}
                    style={{width:'100% !important'}}
                  >
                    Apply Now
                  </Button>{" "}
                </Col>
              </Row>
              <div className="my-3">
                <span className={styles.acc}>Don’t have an account ? </span>
                <a href="#"> Create New</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Form_checkout;
