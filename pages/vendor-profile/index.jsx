import Footer from "layout/footer";
import Header from "layout/header";
import About from "modules/Castle/About";
import Banner from "modules/Castle/Banner";
import Carousel from "modules/Castle/Carousel";
import Property from "modules/Castle/Property";
import Reviews from "modules/Castle/Reviews";
import Vendor from "modules/Castle/Vendor";
import Faq from "modules/home/faq";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from "react-redux";


const VendorProfile = () => {

  //const router = useRouter();
  // const data = router.query;
  const vendorData = useSelector((state) => state.vendorData);

  // console.log(vendorData, 'vendor data')

  return (
    <div>
      <Header />
      <Banner vendor={vendorData} />
      <Vendor />
      <About />
      <Property />
      <Reviews />
      <Faq />
      <Footer />
    </div>
  );
};

export default VendorProfile;
