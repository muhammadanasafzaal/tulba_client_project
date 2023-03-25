import React from "react";
import Couple from "../../public/assests/nikkah-card/couple.png";
import Drum from "../../public/assests/nikkah-card/drum.png";
import Drink from "../../public/assests/nikkah-card/drink.png";
import Steak from "../../public/assests/nikkah-card/steak.png";
import Image from "next/image";

const AboutEvent = () => {
  return (
    <div
      className="bg-[#253659] px-[10%] py-[10%]"
      style={{ fontFamily: "DM Serif Display" }}
    >
      <div className=" m-auto  flex flex-col justify-center text-white gap-[5%] lg:flex-row ">
        <div className="w-9/12 flex justify-center lg:w-1/2">
          <Image className="w-full" src={Couple} />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start gap-[10%] my-4">
          <div className="text-7xl">
            <h1 className="text-center">About the</h1>
            <h1 className="sm:text-center ">Event</h1>
          </div>
          <div className="text-xl font-sans my-4">
            Hop on with us for the beloved functions and ceremony. <br /> Now
            you can add them to your calendar.
          </div>
          <div className="font-serif self-center lg:self-start my-4 ">
            <span className="bg-[#f85757] font-sans px-7 py-2 rounded-lg cursor-pointer hover:shadow-lg ">
              Add to Your Calender
            </span>
          </div>
          <div className=" flex flex-col    gap-6 items-center lg:flex-row">
            <div className="flex flex-col items-center">
              <div className="w-6 h-12">
                <Image src={Drink} />
              </div>
              <div className="text-[#EAD796] text-2xl">Drinks</div>
              <div className="font-serif ">You will get drinks.</div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="w-12 h-12">
                <Image className="w-full h-full object-fill" src={Steak} />
              </div>
              <div className="text-[#EAD796] text-2xl  ">Dinner</div>
              <div className="font-serif  text-center">
                You will get Dinner.
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12">
                <Image className="w-full h-full object-fill" src={Drum} />
              </div>
              <div className="text-[#EAD796] text-3xl">Dancing</div>
              <div className="font-serif text-center">
                You will get Dancing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
