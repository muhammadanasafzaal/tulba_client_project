import React from "react";
import Calender from "../../public/assests/nikkah-card/calender.png";
import Location from "../../public/assests/nikkah-card/location.png";
import Envelope from "../../public/assests/nikkah-card/envelope.png";
import Image from "next/image";

const SpecialEvent = () => {
  return (
    <div
      style={{ fontFamily: "DM Serif Display" }}
      className="bg-[#EAD796] text-black  h-[850px] flex flex-col justify-evenly items-center lg:hidden"
    >
      <div className="flex flex-col items-center gap-6">
        <span className="text-5xl text-center lg:text-8xl">Special Event</span>
        <span className="text-2xl text-center  font-light font-serif">
          Hop on with us for the beloved functions and ceremony
        </span>
      </div>
      <div className=" w-3/4 flex justify-evenly flex-col items-center text-2xl">
        <div className="flex flex-col items-center gap-6 my-4">
          <div className="w-20 h-20 ">
            <Image className=" " src={Calender} />
          </div>
          <div>
            March 27<sup>th</sup>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 my-4">
          <div className="w-20 h-20 ">
            <Image src={Location} />
          </div>
          <div>San Francisco, CA</div>
        </div>
        <div className="flex flex-col items-center gap-6 my-4">
          <div className="w-20 h-20 ">
            <Image src={Envelope} />
          </div>

          <div>RSVP</div>
        </div>
      </div>
      <div>
        <div className="bg-[#f85757] py-3 px-8 rounded-xl cursor-pointer text-white hover:shadow-xl">
        Accept/Reject Invitation
        </div>
      </div>
    </div>
  );
};

export default SpecialEvent;
