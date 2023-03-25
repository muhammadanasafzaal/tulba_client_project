import Header from "layout/header";
import AboutEvent from "modules/nikkah-card-yellow/AboutEvent";
import CardSection from "modules/nikkah-card-yellow/CardSection";
import InfoForm from "modules/nikkah-card-yellow/InfoForm";
import SpecialEvent from "modules/nikkah-card-yellow/SpecialEvent";
import React from "react";

const NikkahCardYellow = () => {
  return (
    <div>
      <Header />
      <CardSection />
      <SpecialEvent />
      <AboutEvent />
      <InfoForm />
    </div>
  );
};

export default NikkahCardYellow;
