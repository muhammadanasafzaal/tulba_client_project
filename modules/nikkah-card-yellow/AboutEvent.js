import React from "react";
import Couple from "../../public/assests/nikkah-card/couple.png";
import Drum from "../../public/assests/nikkah-card/drum.png";
import Drink from "../../public/assests/nikkah-card/drink.png";
import Steak from "../../public/assests/nikkah-card/steak.png";
import About from "../../public/assests/nikkah-card/about-event.png";
import Outdoor from "../../public/assests/nikkah-card/outdoor.png";
import Valet from "../../public/assests/nikkah-card/valet.png";
import Image from "next/image";

const AboutEvent = () => {
  return (
    <div
      className="bg-[#253659] px-[10%] pt-[10%] pb-[5%]"
      style={{ fontFamily: "DM Serif Display" }}
    >
      <div className=" m-auto  flex flex-col justify-center text-white gap-[5%] lg:flex-row ">
        <div className="w-12/12 flex justify-center lg:w-1/2">
          <div className="d-flex align-items-center" style={{ minHeight: 'auto !important' }}>
            <Image className="w-full " src={About} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start gap-[10%] my-4">
          <div className="text-7xl">
            <h1 className="text-md-start text-center">About the Event</h1>
          </div>
          <div className="text-xl font-sans my-4">
            The event will start at 9pm and we have buffet arrangements with valet parking. There is separate arrangements for females.
            Please be on time.
          </div>
          {/* <div className="font-serif self-center lg:self-start my-4 ">
            <span className="bg-[#f85757] font-sans px-7 py-2 rounded-lg cursor-pointer hover:shadow-lg ">
              Add to Your Calender
            </span>
          </div> */}
          <div className="mt-3 flex flex-col gap-6 items-center lg:flex-row">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12">
                <Image className="w-full h-full object-fill" src={Outdoor} />
              </div>
              <div className="text-[#F85757] text-2xl">Outdoor</div>
              <div className="font-serif ">Enjoy the Outdoors</div>
            </div>
            <div className="flex flex-col items-center justify-center ">
              <div className="w-12 h-12">
                <Image className="w-full h-full object-fill" src={Steak} />
              </div>
              <div className="text-[#F85757] text-2xl  ">Dinner</div>
              <div className="font-serif  text-center">
                You will get Dinner at 9pm
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12">
                <Image className="w-full h-full object-fill" src={Valet} />
              </div>
              <div className="text-[#F85757] text-3xl">Valet</div>
              <div className="font-serif text-center">
                Convenient Parking
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
