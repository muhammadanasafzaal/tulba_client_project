/* eslint-disable jsx-a11y/alt-text */
import { Container, Row, Col } from "react-bootstrap";
import styles from "/styles/home/Index.module.scss";
import Image from "next/image";
import Rectangle from "public/assests/home_img/Rectangle 764.svg";
import Rectangle1 from "public/assests/home_img/Rectangle 375.svg";
import Rectangle2 from "public/assests/home_img/Rectangle 374.svg";
import stroke from "public/assests/home_img/Red stroke.svg";
import stroke1 from "public/assests/home_img/Blue stroke.svg";
import Group from "public/assests/home_img/Group.svg";
import temp from "public/assests/home_img/The Collage.svg";
import HeroHomeMob from "public/assests/home_img/hero-home-mob.png";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { AiOutlineSearch } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import CITIES from "data/locations";
import { useState, useCallback, useEffect, useRef  } from "react";

const HomeTopSection = ({ bodyRef }) => {

  const [locationList, setLocationList] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState(null)


  const handleLocationClick = useCallback(() => {
    setLocationList((current) => !current)
  },[])

  const handleLocationChange = (e) => {
    setSelectedLocation(e)  
  }

  const closeLocationList = () => {
    setLocationList(false)
  }

  const selectLocation = (location) => {
    setSelectedLocation(location)
  }


  useEffect(() => {
    const handleClick = (event) => {
      if((!event.target.classList.contains('location') && !event.target.classList.contains('close') 
      && !event.target.classList.contains('list')) && !event.target.classList.contains('form-control')){
        if(locationList){
          setLocationList(false)
        }
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, [locationList]);
  

  return (
    <>
      <style jsx>
      {`
        // .input{
        //   padding: 0.6rem;
        // }
        .locations {
          position: absolute;
          width: 100%;
          z-index: 10;
          border-radius: 3px;
          background: #fff;
          border: 1px solid #e4e4e4;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          max-height: 300px;
        }
        .locations > .list{
          overflow-y: auto;
          max-height: 250px;
          padding: 10px 10px;
        }
        .locations > .list > p{
          width:100%;
          transition:0.2s ease-out;
        }
        .locations > .list > p:hover {
          cursor: pointer;
          background: whitesmoke;
          width: 100%;
          border-radius: 5px;
          margin-bottom: 0.5rem !important;
          font-weight:bold;
        }
        .locations > .close{
          text-align: right;
          margin-bottom:0.5rem;
        }
        .locations > .close > span{
          font-size: 15px;
          padding: 0px 8px 4px 8px;
          border-radius: 50%;
          cursor: pointer;
          font-weight:bold;
        }
      `}
      </style>
      <Container >
        <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <div className="d-lg-none d-md-none d-sm-none d-block">
            <Image
              src={HeroHomeMob}
              alt="googlelogo"
              className={`img-fluid my-0`}
            />
          </div>
        </Col>
          <Col lg={8} md={12} sm={12} xs={12} className={` ${styles.order2}`}>
            <div className={`my-2  ${styles.top_head} `}>
              {/* <div className="d-flex  justify-content-start">
                <div className={`my-4  ${styles.head_border}`}></div>
                <h4> WE got the best tools for your event, so hop on.</h4>
              </div> */}
              <Row className="g-2">
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-xs-center justify-content-md-start align-item-center">
                    <span className={`mt-4  ${styles.headspan} `}>
                      When Your
                    </span>
                    <span className="d-flex flex-column align-items-start">
                      <span className="ms-auto">
                        <Image src={Group} />
                      </span>
                      <div className={styles.dreamContainer}>
                        <span className={`${styles.dream}`}>Dream</span>
                        <Image src={stroke} width={"100px"} />
                      </div>
                    </span>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <div className="d-flex flex-wrap justify-content-xs-center justify-content-md-start ">
                    <span className="d-flex flex-column align-items-start mx-2">
                      <div className={styles.eventContainer}>
                        <span className={` ${styles.event}`}> Event </span>
                        <Image src={stroke1} width={"100px"} />
                      </div>
                    </span>
                    <span className={styles.headspan2}>Comes True</span>
                    <span className={`mt-5 ${styles.dot}`}></span>
                  </div>
                </Col>
              </Row>
              <p className="mb-1 mt-3 bannerSubHeading text-center text-md-start">
                We got the best event planners and most economical setup for
                event so lets do this together and make your event memorable.
              </p>
              <Row className={`g-2 my-5 flex gap-0 ${styles.form}`}>
                <Col md={4} className="btstrp p-0">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Search Vendors, Catering"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Search Vendors, Catering"
                      className={styles.input}
                      // <AiOutlineSearch />
                    />
                  </FloatingLabel>
                </Col>
                <Col md={4} className="btstrp p-0">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                  >
                    <div className={styles.input2} style={{padding: '0.6rem'}} onClick={handleLocationClick}>
                      <Form.Control
                        type="text"
                        list="locations"
                        placeholder="Search Vendors, Catering"
                        onChange={(e) => handleLocationChange(e.target.value)}
                        value={selectedLocation}
                        // <AiOutlineSearch />
                      />
                    </div>

                    { locationList && <div
                      className="locations"
                    >
                      <div className="close">
                        <span onClick={closeLocationList}>x</span>
                      </div>
                      <div className="list">
                        {CITIES.map((item, index) => (
                          <p className="city" key={index} onClick={()=> selectLocation(item)}>
                            {item}
                          </p>
                        ))}
                      </div>
                    </div>}

                    {/* <datalist
                      id="locations"
                      className={`hidden text-black bg-white`}
                    >
                      {CITIES.map((item, index) => (
                        <option className="bg-white" key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </datalist> */}
                  </FloatingLabel>
                </Col>

                <Col md={2} sm={12} className="p-0">
                  <Button className={`px-2 ml-md-3 ${styles.inputbtn}`}>
                    Search here
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} xs={12}>
            <div className="d-flex justify-content-center">
              <div className={styles.order1}>
                <Image
                  src={Rectangle}
                  alt="googlelogo"
                  className={`${styles.top_img1} img-fluid `}
                />{" "}
                <Image
                  src={Rectangle2}
                  alt="googlelogo"
                  className={`${styles.top_img2} img-fluid `}
                />
              </div>
              <div className={styles.order1}>
                <Image
                  src={Rectangle1}
                  alt="googlelogo"
                  className={`${styles.top_img} img-fluid `}
                  width={"650px"}
                  height={"1500px"}
                />{" "}
              </div>
            </div>

            {/* <div> */}

            {/* <Image
                  src={temp}
                  alt="googlelogo"
                  height={"100px"}
                  width={"100px"}
                  layout="fixed"

                  /> */}
            {/* <Image 
                  src={collage}
                  layout="fixed"
                  height={"100px"}
                  width={"100px"}
                  /> */}
            {/* </div> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeTopSection;
