import Image from "next/image";
import React from "react";
import BMText from "../../public/assests/nikkah-card/BMtext.png";
import NikkahCardBgYellow from "../../public/assests/nikkah-card/NikkahCardBgYellow.png";

const CardSection = () => {
  return (
    <div className="flex justify-center items-center w-screen relative  bg-[#EAD796] ">
      <Image
        src={NikkahCardBgYellow}
        alt="spiral"
        layout="fill"
        objectFit="cover"
      />
      <div className="  border-[12px] z-10 border-[#253659]  bg-[#EAD796] px-12 py-16 flex  flex-col items-center justify-between gap-12 my-14 ">
        <div>
          <Image className="h-auto max-w-full" src={BMText} />
        </div>

        <div>
          <h2 className="text-md-start text-center font-bold text-[#253659]  tracking-widest">
            TOGETHER WITH THEIR FAMILIES
          </h2>
        </div>

        <div
          className="italic  text-[#253659] text-center text-4xl capitalize "
          style={{ fontFamily: "DM Serif Display" }}
        >
          <h1>Salman Khan</h1>
          <h1>And</h1>
          <h1>Farida kaif</h1>
        </div>

        <div>
          <h2 className="text-md-start text-center font-bold text-[#253659]  capitalize  tracking-widest">
            REQUEST THE HONOUR OF YOUR <br className="d-lg-block d-md-block d-sm-block d-none" />PRESENCE AT THEIR WEDDING
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
