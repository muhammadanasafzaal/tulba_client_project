import React, { useState } from "react";
import Image from "next/image";
import styles from "/styles/home/Index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Faqcard from "./faqcard";
import { AiOutlineDownCircle, AiOutlineUpCircle } from "react-icons/ai";

const Faq = () => {
  const [faq, showFaq] = useState(false);
  return (
    <>
      <Container className="mt-5 mb-2">
        <Row>
          <Col>
            <div
              className={`${styles.faq} ${
                faq ? styles.faqCardsFull : styles.faqCardsHalf
              } `}
            >
              <h6 className="text-center text-primary text-uppercase">
                Answer to all the main Question are here Or contact us for more
              </h6>
              <h4 className="text-center">Frequently Asked Questions</h4>
              <div>
                <Faqcard />
                <hr />
                <Faqcard />
                <hr />
                <Faqcard />
              </div>
            </div>
            <div className={styles.faqButton}>
              <div
                style={{ cursor: "pointer", marginTop: "5px" }}
                className={`${!faq && styles.pulse}`}
                onClick={() => showFaq(!faq)}
              >
                {!faq ? (
                  <AiOutlineDownCircle size={26} />
                ) : (
                  <AiOutlineUpCircle size={26} />
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Faq;
