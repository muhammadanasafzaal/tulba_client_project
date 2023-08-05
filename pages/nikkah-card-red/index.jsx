import Footer from "layout/footer";
import Header from "layout/header";
import AboutEvent from "modules/nikkah-card-red/AboutEvent";
import CardSection from "modules/nikkah-card-red/CardSection";
import InfoForm from "modules/nikkah-card-red/InfoForm";
import SpecialEvent from "modules/nikkah-card-red/SpecialEvent";
import React from "react";

const NikkahTemplate = () => {
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

export default NikkahTemplate;
