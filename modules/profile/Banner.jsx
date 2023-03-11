import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Venue_content from "./Content";
import styles from "/styles/profile/profile.module.scss";
// import { Stepper, Step } from 'react-form-stepper';
import Congrates from "../../components/stepper_form/steps/Congrates";
import Stepper from "./../../components/stepper_form/Stepper";
import StepperControl from "./../../components/stepper_form/StepperControl";
import Account from "./../../components/stepper_form/steps/Account";
import Details from "./../../components/stepper_form/steps/Details";
import { StepperContext } from "./contexts/StepperContext";

const percentage = 75;

const Banner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  const steps = ["Complete Your Profile", "Add Your Event", "Congrates"];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Congrates />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
      <Container className={styles.profile}>
        <Row>
          <Col lg={3} md={6}>
            <div className="d-flex">
              <div>
                <Venue_content client="/../assests/home_img/Male 1.svg" />
              </div>
              <div className={styles.img}>
                <Venue_content client="/../assests/home_img/Female 1.svg" />
              </div>
            </div>
          </Col>

          <Col lg={7} md={6}>
            <div className="mx-5 my-4">
              <h1>Zeeshan And Mariyam Weds</h1>
              <p>
                Enter your wedding details and get the record of all the
                required data of your wedding.
              </p>
            </div>
          </Col>
          <Col lg={2}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
          </Col>
        </Row>
        <Row className="my-5">
          <p className="text-center text-base">
            Complete the Below process for your wedding to get started
          </p>

          {/* <Stepper activeStep={2}>
            <Step label=" Complete Your Profile" />
            <Step label=" Add Your Event" />
            <Step label=" Shop Invites & Nikkah Template" />
            <Step label=" Guest account" />
          </Stepper> */}

          {/* Stepper */}
          <div className="container horizontal mt-5">
            <Stepper steps={steps} currentStep={currentStep} />

            {/* Display Components */}
            <div className="my-10 p-10">
              <StepperContext.Provider
                value={{
                  userData,
                  setUserData,
                  finalData,
                  setFinalData,
                }}
              >
                {displaySteps(currentStep)}
              </StepperContext.Provider>
            </div>
          </div>

          {/* Navigation controls */}
          {currentStep !== steps.length && (
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Banner;
