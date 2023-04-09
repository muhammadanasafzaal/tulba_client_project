import Link from "next/link";
import Image from "next/image";
import fb from "public/assests/fb.svg";
import React, { useState } from "react";
import SignupPopup from "./SignupPopup";
import { FaUser } from "react-icons/fa";
import apple from "public/assests/apple.svg";
import { BsEnvelopeFill } from "react-icons/bs";
import styles from "/styles/Rsvp/Rsvp.module.scss";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import googlelogo from "public/assests/GoogleLogo.svg";

const Banner = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && <SignupPopup modal={modal} setModal={setModal} />}
      <div className="flex flex-1  ">
        <div className="flex-1 lg:flex-[0.5] px-[6%] md:pl-[6%] z-10 ">
          <div>
            <Breadcrumb>
              <Breadcrumb.Item href="/" style={{ textDecoration: "none" }}>
                <span className="text-[#666666] font-normal text-sm no-underline">
                  Home
                </span>
              </Breadcrumb.Item>
              <Breadcrumb.Item
                active
                className="text-[#f85757] font-semibold font-sm "
              >
                Event Planner
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div>
            <h1
              style={{ fontFamily: "DM Serif Display" }}
              className=" leading-loose text-5xl font-bold"
            >
              Event Planner
            </h1>
            <div>
              <h4
                style={{ fontFamily: "DM Serif Display" }}
                className="my-3"
                onClick={() => setModal(!modal)}
              >
                Get Started
              </h4>
              <div>
                <div
                  className=" w-full   mx-[0%] flex flex-col  
              lg:gap-[0px]  lg:flex-row lg:justify-start"
                >
                  <div
                    className={`my-2 h-14  bg-white flex gap-2 items-center   shadow-lg shadow-gray-300 pl-2 rounded-md md:border-r lg:border-[#f84747] lg:rounded-l-md md:rounded-r-none md:my-0`}
                  >
                    <FaUser className="text-[#f85757]  w-4 h-4" />
                    <input
                      type="text"
                      className="focus:border-0 outline-0 w-48 h-full "
                      placeholder="First Name"
                    />
                  </div>
                  <div
                    className={`h-14 my-2 bg-white flex gap-2 items-center  pl-2    shadow-lg shadow-gray-300 rounded-md  md:border-l md:border-[#f84747] md:rounded-r-md md:rounded-l-none md:my-0`}
                  >
                    <BsEnvelopeFill className="text-[#f85757] w-4 h-4" />
                    <input
                      type="email"
                      className="focus:border-0 w-48 outline-0"
                      placeholder="Email"
                    />
                  </div>
                  <div className="my-2 py-1 h-14 lg:w-1/5 relative  ">
                    <div className="bg-[#f85757]  h-full flex justify-center items-center  text-white text-[13px] rounded-[15px] cursor-pointer hover:opacity-80 md:my-0">
                      Start Planning
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between mt-[3%] md:flex-row md:items-start">
              <div className="">
                <h5
                  style={{ fontFamily: "GilorySemiBold" }}
                  className="text-base leading-10 "
                >
                  You can also sign up using:
                </h5>

                <div className="flex  justify-center md:justify-start">
                  <div className="p-2.5 h-10 w-10 border border-[#cccccc] rounded-full mx-2 hover:scale-125 cursor-pointer">
                    <Image
                      src={googlelogo}
                      alt="googlelogo"
                      width={"20px"}
                      height={"20px"}
                      loading="lazy"
                    />{" "}
                  </div>
                  <div className="p-2.5 h-10 w-10 border border-[#cccccc] rounded-full mx-2 hover:scale-125 cursor-pointer">
                    <Image
                      src={fb}
                      alt="googlelogo"
                      width={"20px"}
                      height={"20px"}
                      loading="lazy"
                    />{" "}
                  </div>
                  <div className="p-2.5 h-10 w-10 border border-[#cccccc] rounded-full mx-2 hover:scale-125 cursor-pointer">
                    <Image
                      src={apple}
                      alt="googlelogo"
                      width={"20px"}
                      height={"20px"}
                      loading="lazy"
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="pr-[3%]">
                <h5
                  style={{ fontFamily: "$GilorySemiBold" }}
                  className="text-base leading-10 "
                >
                  Already have an account?{" "}
                  <Link href="/loginin">
                    <span className="text-[#f85757]  cursor-pointer">
                      Log in
                    </span>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-[0.5] relative ">
          {/* <div className="absolute h-full w-[70%] right-[65%]  bg-white rounded-full"></div> */}
          <div className={styles.banner_img}></div>
        </div>
      </div>
    </>
  );
};

export default Banner;
