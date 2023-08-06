import React from "react";
import ConfirmationModal from "components/popup/confirmation_popup";
import { useState } from "react";

const InfoForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const handelOpenModal = () => {
    setModalShow(true);
  }
  const handleReset = () => {
    setModalShow(false);
  };

  return (
    <div
      className=" bg-[#253659] px-[10%] py-[5%] text-white flex flex-col items-center gap-12 "
      style={{ fontFamily: "DM Serif Display" }}
    >
      <div className="">
        <div className="text-center text-7xl">Event Info</div>
        <div className="text-center font-sans">
          Hop on with us for the beloved functions and ceremony
        </div>
      </div>
      <div className="w-full flex flex-col justify-between gap-12 lg:flex-row">
        <div className="  flex flex-col items-center">
          <div className="font-sans text-[#f85757] text-xl">Date</div>
          <div className="text-4xl">
            March 27 <sup>th</sup>
          </div>
        </div>
        <div className="  flex flex-col items-center">
          <div className="font-sans text-[#f85757] text-xl">Location</div>
          <div className="text-4xl">San Francisco, CA</div>
        </div>
        <div className="  flex flex-col items-center">
          <div className="font-sans text-[#f85757] text-xl">Time</div>
          <div className="text-4xl">10PM Midnight</div>
        </div>
        <div className="  flex flex-col items-center">
          <div className="font-sans text-[#f85757] text-xl">Info</div>
          <div className="text-4xl">RSVP</div>
        </div>
      </div>
      <div className="d-md-flex d-xs-none justify-center" style={{width:'100%'}}>
        <button className="btn btn-lg btn-primary text-white border-none mb-md-0 mb-2 w-xs-100" style={{background:'#f85757'}} onClick={handelOpenModal} >
          Yes, I'm coming!
        </button>
        <button className="btn btn-lg btn-primary text-white border-none ms-md-4 w-xs-100" style={{background:'#ead796'}} onClick={handelOpenModal} >
          No, I'm not coming!
        </button>
      </div>
      <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleReset={handleReset}
      />
      {/* <div className=" w-full mt-[75px]">
        <div className="w-full my-[12px]">
          <label className="text-white font-sans">Name</label>
          <input
            autoComplete="off"
            className="w-full bg-transparent border-b border-[#f85757] outline-0"
          />
        </div>
        <div className="w-full my-[12px]">
          <label className="text-white font-sans">Email</label>
          <input
            autoComplete="off"
            className="w-full bg-transparent border-b border-[#f85757] outline-0"
            type="email"
          />
        </div>
        <div className="w-full my-[12px]">
          <label className="text-white font-sans">Message</label>
          <textarea
            autoComplete="off"
            className="w-full bg-transparent border-b border-[#f85757] outline-0"
            rows={5}
          />
        </div>
        <div className=" flex justify-center lg:justify-end">
          <div className="bg-[#f85757] px-5 cursor-pointer py-2  rounded-lg hover:opacity-80">
            Submit
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default InfoForm;
