/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "styles/home/Index.module.scss";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineUsergroupAdd,
  AiOutlineHeart,
  AiOutlineLeft,
  AiOutlineRight,
  AiFillFolderOpen,
  AiFillHeart,
} from "react-icons/ai";
import { BiMap, BiDish } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
const Cardcontent = (props) => {
  const [favourite, setFavourite] = useState(false);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className={`relative ${styles.browse}`}>
              {!favourite && (
                <AiOutlineHeart
                  className="absolute right-3 top-3  z-30 w-6 h-6 text-white cursor-pointer "
                  onClick={() => setFavourite(true)}
                />
              )}
              {favourite && (
                <AiFillHeart
                  className="absolute right-3 top-3  z-30 w-6 h-6  text-white cursor-pointer "
                  onClick={() => setFavourite(false)}
                />
              )}
              <Carousel
                showStatus={false}
                emulateTouch={true}
                renderArrowPrev={(clickHandler, hasPrev) => {
                  return (
                    <div
                      className={`${
                        hasPrev ? "absolute" : "hidden"
                      } top-0 bottom-0 left-0 flex justify-center items-center py-3 opacity-80 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <AiOutlineLeft className="w-6 h-6 mx-2  text-white" />
                    </div>
                  );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                  return (
                    <div
                      className={`${
                        hasNext ? "absolute" : "hidden"
                      } top-0 bottom-0 right-0 flex justify-center items-center py-3 opacity-80 hover:opacity-100 cursor-pointer z-20`}
                      onClick={clickHandler}
                    >
                      <AiOutlineRight className="w-6 h-6 mx-2  text-white" />
                    </div>
                  );
                }}
              >
                {[1, 2, 3, 4].map((e) => (
                  <div>
                    <Image
                      src={props.imgsrc}
                      width={"303px"}
                      height={"222px"}
                      layout="responsive"
                      className="m-0"
                    />
                  </div>
                ))}
                <div className="relative">
                  <div className="absolute z-20  h-full w-full flex justify-center items-center flex-col cursor-pointer">
                    <AiFillFolderOpen className="w-8 h-8 text-white" />
                    <h6 className="text-white">View 79 more Photos</h6>
                  </div>

                  <Image
                    src={props.imgsrc}
                    width={"303px"}
                    height={"222px"}
                    layout="responsive"
                    className="m-0 absolute opacity-60"
                  />
                </div>
              </Carousel>
              <div className="flex justify-between items-center  ">
                <Button className={`mx-3  ${styles.cardbtn}`}>
                  {props.btn}
                </Button>
                <div className="flex items-center gap-2 mx-2 ">
                  <AiFillStar className={`  ${styles.star}`} />
                  <span className={`  ${styles.myspan}`}>5</span>
                </div>
              </div>
              <h1 className="mx-3">The Asthetcal</h1>
              <div className="d-flex justify-content-start align-items-center">
                <BiMap className={` ${styles.map1}`} />
                <span>Bekasi, Jawa Barat Hall Al khema</span>
              </div>
              <div className="mx-1 d-flex justify-content-start align-items-center">
                <BiDish className={`my-2 ${styles.map}`} />
                <span className="my-2">From 20$</span>
                <AiOutlineUsergroupAdd className={` my-2 ${styles.map}`} />
                <span className="my-2">50 to 600</span>
              </div>
              <div className="d-flex  align-items-start">
                <h4 className="my-1">{props.price}</h4>
                <span className="my-3"> Per Event</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardcontent;
