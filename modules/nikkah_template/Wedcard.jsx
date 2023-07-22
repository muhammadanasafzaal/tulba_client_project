import React, { useState } from "react";
import Image from "next/image";
import Pagination from "react-bootstrap/Pagination";
import styles from "/styles/vendors/vendor.module.scss";
import Vector from "public/assests/shop-invitation/weddingcard.png";
import stylesButton from "/styles/modal/modal.module.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  AiFillStar,
  AiOutlineUsergroupAdd,
  AiOutlineRight,
  AiOutlineDown,
} from "react-icons/ai";
import {
  GiElvenCastle,
  GiCastle,
  GiNestedHearts,
  GiLargeDress,
} from "react-icons/gi";
import MultiRangeSlider from "components/multi_range_slider";
import Link from "next/link";

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}
const Wedcard = () => {
  const [paper, showPaper] = useState(false);
  const [price, showPrice] = useState(false);
  const [type, showType] = useState(false);
  const [mobileCard, showMobileCard] = useState(false);

  return (
    <Container>
      {mobileCard && (
        <div className="w-screen">
          <div className={styles.mobileCard}>
            <div className="d-flex justify-content-end">
              <div
                onClick={() => {
                  showMobileCard(!mobileCard);
                }}
                className={styles.closeButton}
              >
                x
              </div>{" "}
            </div>
            <div
              onClick={() => showPaper(!paper)}
              className={`flex justify-between items-center ${styles.sideBarList
                } ${paper && styles.actvelink} `}
            >
              <span>Paper</span>

              {!paper ? (
                <AiOutlineRight size={20} />
              ) : (
                <AiOutlineDown size={20} />
              )}
            </div>

            {paper && (
              <div className={styles.expandable}>
                <div>
                  <input type="checkbox" className="bg-white" id="matte" />
                  <label htmlFor="matte">Matte</label>
                </div>
                <div>
                  <input type="checkbox" className="bg-white" id="glossy" />
                  <label htmlFor="glossy">Glossy</label>
                </div>
                <div>
                  <input type="checkbox" className="bg-white" id="handmade" />
                  <label htmlFor="handmade">Handmade</label>
                </div>
                <div>
                  <input type="checkbox" className="bg-white" id="mylar" />
                  <label htmlFor="mylar">Mylar</label>
                </div>
                <div>
                  <input type="checkbox" className="bg-white" id="recycled" />
                  <label htmlFor="recycled">Recycled</label>
                </div>
                <div>
                  <input type="checkbox" className="bg-white" id="parchment" />
                  <label htmlFor="parchment">Parchment</label>
                </div>
              </div>
            )}

            <div
              onClick={() => showPrice(!price)}
              className={`flex justify-between items-center ${styles.sideBarList
                } ${price && styles.actvelink} `}
            >
              <span>Price</span>

              {!price ? (
                <AiOutlineRight size={20} />
              ) : (
                <AiOutlineDown size={20} />
              )}
            </div>

            {price && (
              <div className={`p-0 ${styles.expandable}`}>
                <MultiRangeSlider min="0" max="1000" step="10" />
              </div>
            )}

            <div
              onClick={() => showType(!type)}
              className={`flex justify-between items-center ${styles.sideBarList
                } ${type && styles.actvelink} `}
            >
              <span>Type</span>

              {!type ? (
                <AiOutlineRight size={20} />
              ) : (
                <AiOutlineDown size={20} />
              )}
            </div>

            {type && (
              <div className={styles.expandable}>
                <div>
                  <input type="checkbox" className="bg-white" id="cards" />
                  <label htmlFor="cards">Cards</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="bg-white"
                    id="boxed-gifting"
                  />
                  <label htmlFor="boxed-gifting">Boxed Gifting</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="bg-white"
                    id="novel-concepts"
                  />
                  <label htmlFor="novel-concepts">Novel Concepts</label>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <Container>
        <Row>
          <Col md={3} className={styles.filterContainer}>
            <h1>Categories</h1>

            <div>
              <div
                onClick={() => showPaper(!paper)}
                className={`flex justify-between items-center ${styles.sideBarList
                  } ${paper && styles.actvelink} `}
              >
                <span>Paper</span>

                {!paper ? (
                  <AiOutlineRight size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
              </div>

              {paper && (
                <div className={styles.expandable}>
                  <div>
                    <input type="checkbox" className="bg-white" id="matte" />
                    <label htmlFor="matte">Matte</label>
                  </div>
                  <div>
                    <input type="checkbox" className="bg-white" id="glossy" />
                    <label htmlFor="glossy">Glossy</label>
                  </div>
                  <div>
                    <input type="checkbox" className="bg-white" id="handmade" />
                    <label htmlFor="handmade">Handmade</label>
                  </div>
                  <div>
                    <input type="checkbox" className="bg-white" id="mylar" />
                    <label htmlFor="mylar">Mylar</label>
                  </div>
                  <div>
                    <input type="checkbox" className="bg-white" id="recycled" />
                    <label htmlFor="recycled">Recycled</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="bg-white"
                      id="parchment"
                    />
                    <label htmlFor="parchment">Parchment</label>
                  </div>
                </div>
              )}

              <div
                onClick={() => showPrice(!price)}
                className={`flex justify-between items-center ${styles.sideBarList
                  } ${price && styles.actvelink} `}
              >
                <span>Price</span>

                {!price ? (
                  <AiOutlineRight size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
              </div>

              {price && (
                <div className={`p-0 ${styles.expandable}`}>
                  <MultiRangeSlider min="0" max="1000" step="10" />
                </div>
              )}

              <div
                onClick={() => showType(!type)}
                className={`flex justify-between items-center ${styles.sideBarList
                  } ${type && styles.actvelink} `}
              >
                <span>Type</span>

                {!type ? (
                  <AiOutlineRight size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
              </div>

              {type && (
                <div className={styles.expandable}>
                  <div>
                    <input type="checkbox" className="bg-white" id="cards" />
                    <label htmlFor="cards">Cards</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="bg-white"
                      id="boxed-gifting"
                    />
                    <label htmlFor="boxed-gifting">Boxed Gifting</label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="bg-white"
                      id="novel-concepts"
                    />
                    <label htmlFor="novel-concepts">Novel Concepts</label>
                  </div>
                </div>
              )}
            </div>
          </Col>

          <Col md={3} className={styles.filterButton}>
            <h5 className="text-capitalize">
              Shop Our hand crafted Invitations
            </h5>
            <span>(1,000+ relevant results)</span>
            <button
              onClick={() => {
                showMobileCard(!mobileCard);
              }}
            >
              {" "}
              Filters{" "}
            </button>
          </Col>

          <Col lg={9}>
            <div className="flex items-center my-2">
              <h3 className="text-capitalize">
                Shop Our hand crafted Invitations
              </h3>
              <h5 className={`m-1 ${styles.number}`}>
                (1,000+ relevant results)
              </h5>
            </div>
            <Row>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                return (
                  <Col lg={4} md={6} className="my-2" >
                    {/* <Link href="/"> */}
                    <div className="cursor-pointer">
                      <Link href="/asthetical">
                        <div className={` ${styles.wed_card}`}>
                          <Image
                            src={"/assests/home_img/nikkah.png"}
                            layout="fixed"
                            width={"280px"}
                            height={"300px"}
                            alt="template"
                          />
                        </div>
                      </Link>
                      <div
                        className={`d-flex justify-content-between ${styles.wed_content}`}
                      >
                        <h1 className="mx-3 my-2">Yellow card</h1>
                        <div className="d-flex justify-content-end">
                          <AiFillStar className={` my-3 ${styles.star}`} />
                          <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>
                            5
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start  my-2">
                        <h4 className="mx-3">$300.00</h4>
                        <h6 className="my-1">( 20% off )</h6>
                      </div>
                      <div className="d-flex justify-content-start  my-1 mx-3">
                        <div className={`mx-1 ${styles.circle_blue}`}></div>
                        <div className={`mx-1 ${styles.circle_green}`}></div>
                        <div className={`mx-1 ${styles.circle_pink}`}></div>
                      </div>
                    </div>
                    {/* </div> */}
                    <div className="d-flex justify-content-center justify-content-md-start  my-2">
                      <h4 className="mx-3">$300.00</h4>
                      <h6 className="my-1">( 20% off )</h6>
                    </div>
                    <div className="d-flex  justify-content-center justify-content-md-start   my-1 mx-3">
                      <div className={`mx-1 ${styles.circle_blue}`}></div>
                      <div className={`mx-1 ${styles.circle_green}`}></div>
                      <div className={`mx-1 ${styles.circle_pink}`}></div>
                    </div>
                    {/* </Link> */}

                    <div className="flex flex-row justify-evenly my-1 mx-1">
                      <div>
                        <Link href="/nikkah-card-yellow">
                          <Button className={stylesButton.btn1} variant="danger">
                            Buy Now
                          </Button>
                        </Link>
                      </div>

                      <div>
                        <Button className={stylesButton.btn1} variant="danger">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </Col>
                )
              })}
              {/* <Col lg={4} md={6} className="my-2">
                <div className={`${styles.wed_card}`}>
                  <Image
                    src={Vector}
                    layout="fixed"
                    width={"280px"}
                    height={"320px"}
                    alt="template"
                  />
                </div>
                <div
                  className={`d-flex justify-content-between ${styles.wed_content}`}
                >
                  <h1 className="mx-3 my-2">The Aesthetical</h1>

                      <div className="d-flex justify-content-end">
                        <AiFillStar className={` my-3 ${styles.star}`} />
                        <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>
                          5
                        </span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start  my-2">
                      <h4 className="mx-3">$300.00</h4>
                      <h6 className="my-1">( 20% off )</h6>
                    </div>
                    <div className="d-flex justify-content-start  my-1 mx-3">
                      <div className={`mx-1 ${styles.circle_blue}`}></div>
                      <div className={`mx-1 ${styles.circle_green}`}></div>
                      <div className={`mx-1 ${styles.circle_pink}`}></div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-start  my-2">
                  <h4 className="mx-3">$300.00</h4>
                  <h6 className="my-1">( 20% off )</h6>
                </div>
                <div className="d-flex justify-content-center justify-content-md-start  my-1 mx-3">
                  <div className={`mx-1 ${styles.circle_blue}`}></div>
                  <div className={`mx-1 ${styles.circle_green}`}></div>
                  <div className={`mx-1 ${styles.circle_pink}`}></div>
                </div>

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Link href = "/nikkah-card-red">
                      <Button className={stylesButton.btn1} variant="danger">
                        Buy Now
                      </Button>
                    </Link>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col> */}
              <Col lg={12} className="">
                <div className="d-flex justify-content-end p-5">
                  <Pagination size="md">{items}</Pagination>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Wedcard;
