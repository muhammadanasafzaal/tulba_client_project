import Image from "next/image";
import React from "react";
import BMText from "../../public/assests/nikkah-card/BMtext.png";
import NikkahCardBg from "../../public/assests/nikkah-card/NikkahCardBg.png";

const CardSection = () => {
  return (
    <div className="flex justify-center items-center w-screen relative  bg-[#f85757]  ">
      <Image src={NikkahCardBg} alt="spiral" layout="fill" objectFit="cover" />
      <div className="  border-[12px] z-10 border-[#253659]  bg-white px-12 py-16 flex  flex-col items-center justify-between gap-12 my-14 ">
        <div>
          <Image className="h-auto max-w-full" src={BMText} />
        </div>

        <div>
          <h2 className="font-bold text-[#253659]  tracking-widest">
            TOGETHER WITH THEIR FAMILIES
          </h2>
        </div>

        <div
          className="italic  text-[#F85757] text-center text-4xl capitalize "
          style={{ fontFamily: "DM Serif Display" }}
        >
          <h1>Salman Khan</h1>
          <h1>And</h1>
          <h1>Farida kaif</h1>
        </div>

        <div>
          <h2 className="font-bold text-[#253659]  capitalize  tracking-widest">
            REQUEST THE HONOUR OF YOUR
          </h2>
          <h2 className="font-bold text-[#253659]  capitalize  tracking-widest">
            PRESENCE AT THEIR WEDDING
          </h2>
        </div>

        <div className="text-center">
          <h2 className="font-bold text-[#253659]  capitalize  tracking-widest">
            AUGUST 17 | SATURDAY | 8PM
          </h2>
          <h2 className="font-bold text-[#253659]  capitalize  tracking-widest">
            GRAND ROYAL HOTEL
          </h2>
          <h2 className="font-bold text-[#253659]  capitalize  tracking-widest">
            3272 PARKER ST. FERMONT CA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
