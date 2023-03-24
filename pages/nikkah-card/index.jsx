import Footer from "layout/footer";
import Header from "layout/header";
import AboutEvent from "modules/nikkah-card/AboutEvent";
import CardSection from "modules/nikkah-card/CardSection";
import InfoForm from "modules/nikkah-card/InfoForm";
import SpecialEvent from "modules/nikkah-card/SpecialEvent";
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
