import React from "react";

const InfoForm = () => {
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
      </div>
      <div className=" w-full mt-[75px]">
        <div className="w-full my-[12px]">
          <label className="text-white font-sans">Name</label>
          <input className="w-full bg-transparent border-b border-[#f85757] outline-0" />
        </div>
        <div className="w-full my-[12px]">
          <label className="text-white font-sans">Email</label>
          <input className="w-full bg-transparent border-b border-[#f85757] outline-0" />
        </div>
        <div className="w-full my-[12px]">
          <label className="text-white font-sans">Message</label>
          <textarea
            className="w-full bg-transparent border-b border-[#f85757] outline-0"
            rows={5}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoForm;
