import Footer from "layout/footer";
import Header from "layout/header";
import Banner from "modules/checklist/Banner";
import Main from "modules/checklist/Main";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const CheckList = () => {
  return (
    <>
      <Header />
      <Banner />
      <Main />
      <Footer />
    </>
  );
};

export default CheckList;
