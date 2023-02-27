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
              className={`${styles.sideBarList} ${paper && styles.actvelink} `}
            >
              {!paper ? (
                <AiOutlineRight size={20} />
              ) : (
                <AiOutlineDown size={20} />
              )}
              <span> Paper </span>
            </div>

            {paper && (
              <div className={styles.expandable}>
                <div>
                  <input type="checkbox" />
                  <span>Matte</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Glossy</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Handmade</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Mylar</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Recycled</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Parchment</span>
                </div>
              </div>
            )}
            <div
              onClick={() => showPrice(!price)}
              className={`${styles.sideBarList} ${price && styles.actvelink} `}
            >
              {!price ? (
                <AiOutlineRight size={20} />
              ) : (
                <AiOutlineDown size={20} />
              )}
              <span> Price </span>
            </div>
            {price && (
              <div className={styles.expandable}>
                <div>
                  <input type="checkbox" />
                  <span>$1-$10</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>$11-$20</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>$20-$30</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>$30-$50</span>
                </div>
              </div>
            )}
            <div
              onClick={() => showType(!type)}
              className={`${styles.sideBarList} ${type && styles.actvelink} `}
            >
              {!type ? (
                <AiOutlineRight size={20} />
              ) : (
                <AiOutlineDown size={20} />
              )}
              <span>Type </span>
            </div>
            {type && (
              <div className={styles.expandable}>
                <div>
                  <input className={styles.input} type="checkbox" />
                  <span>Cards</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Boxed Gifting</span>
                </div>
                <div>
                  <input type="checkbox" />
                  <span>Novel Concepts</span>
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
                className={`${styles.sideBarList} ${
                  paper && styles.actvelink
                } `}
              >
                {!paper ? (
                  <AiOutlineRight size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
                <span> Paper </span>
              </div>

              {paper && (
                <div className={styles.expandable}>
                  <div>
                    <input type="checkbox" id="matte" />
                    <label htmlFor="matte">Matte</label>
                  </div>
                  <div>
                    <input type="checkbox" id="glossy" />
                    <label htmlFor="glossy">Glossy</label>
                  </div>
                  <div>
                    <input type="checkbox" id="handmade" />
                    <label htmlFor="handmade">Handmade</label>
                  </div>
                  <div>
                    <input type="checkbox" id="mylar" />
                    <label htmlFor="mylar">Mylar</label>
                  </div>
                  <div>
                    <input type="checkbox" id="recycled" />
                    <label htmlFor="recycled">Recycled</label>
                  </div>
                  <div>
                    <input type="checkbox" id="parchment" />
                    <label htmlFor="parchment">Parchment</label>
                  </div>
                </div>
              )}
              <div
                onClick={() => showPrice(!price)}
                className={`${styles.sideBarList} ${
                  price && styles.actvelink
                } `}
              >
                {!price ? (
                  <AiOutlineRight size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
                <span> Price </span>
              </div>
              {price && (
                <div className={styles.expandable}>
                  <div>
                    <input type="checkbox" id="1-10" />
                    <label htmlFor="1-10">$1-$10</label>
                  </div>
                  <div>
                    <input type="checkbox" id="11-20" />
                    <label htmlFor="11-20">$11-$20</label>
                  </div>
                  <div>
                    <input type="checkbox" id="20-30" />
                    <label htmlFor="20-30">$20-$30</label>
                  </div>
                  <div>
                    <input type="checkbox" id="30-50" />
                    <label htmlFor="30-50">$30-$50</label>
                  </div>
                </div>
              )}
              <div
                onClick={() => showType(!type)}
                className={`${styles.sideBarList} ${type && styles.actvelink} `}
              >
                {!type ? (
                  <AiOutlineRight size={20} />
                ) : (
                  <AiOutlineDown size={20} />
                )}
                <span>Type </span>
              </div>
              {type && (
                <div className={styles.expandable}>
                  <div>
                    <input type="checkbox" id="cards" />
                    <label htmlFor="cards">Cards</label>
                  </div>
                  <div>
                    <input type="checkbox" id="boxed-gifting" />
                    <label htmlFor="boxed-gifting">Boxed Gifting</label>
                  </div>
                  <div>
                    <input type="checkbox" id="novel-concepts" />
                    <label htmlFor="novel-concepts">Novel Concepts</label>
                  </div>
                </div>
              )}
            </div>
          </Col>

          <Col md={3} className={styles.filterButton}>
            <span>1,000+ relevant results</span>
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
              <Col lg={4} md={6} className="my-2">
                <div className={` ${styles.wed_card}`}>
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>
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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
                <div className={` ${styles.wed_card}`}>
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
                <div className={` ${styles.wed_card}`}>
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

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

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg={4} md={6} className="my-2">
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
                  <h1 className="mx-3 my-2">The Asthetcal</h1>

                  <div className="d-flex justify-content-end">
                    <AiFillStar className={` my-3 ${styles.star}`} />
                    <span className={`my-2  mx-2 pt-2 ${styles.myspan}`}>
                      5
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-start">
                  <h4 className="mx-3">$300.00</h4>
                  <h6 className="my-1">( 20% off )</h6>
                </div>
                <div className="d-flex justify-content-start  my-1 mx-3">
                  <div className={`mx-1 ${styles.circle_blue}`}></div>
                  <div className={`mx-1 ${styles.circle_green}`}></div>
                  <div className={`mx-1 ${styles.circle_pink}`}></div>
                </div>

                <div className="flex flex-row justify-evenly my-1 mx-1">
                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Buy Now
                    </Button>
                  </div>

                  <div>
                    <Button className={stylesButton.btn1} variant="danger">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Col>
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
