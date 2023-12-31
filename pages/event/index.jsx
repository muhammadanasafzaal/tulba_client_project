import React from "react";
import Footer from "layout/footer";
import Header from "layout/header";
import Banner from "modules/event/Banner";
import Template from "modules/home/template";
import "bootstrap/dist/css/bootstrap.css";

const Event = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Template />
      <Footer />
    </div>
  );
};

export default Event;
