import Image from "next/image";
import React from "react";

const PlanCards = ({
  primaryColor,
  secondaryColor,
  image,
  headingText,
  text,
  btnTextColor,
  width,
}) => {
  console.log(primaryColor);
  return (
    <div className="flex flex-col items-center gap-4 my-6">
      <div
        style={{ backgroundColor: primaryColor, image }}
        className={`w-72 h-72 rounded-full bg-${[
          primaryColor,
        ]}] flex flex-col justify-center `}
      >
        <Image
          src={image}
          className={` h-20`}
          style={{ width: width }}
          width={width}
          objectFit="contain"
        />
      </div>

      <div
        style={{ backgroundColor: secondaryColor }}
        className="w-96 h-72 p-8 rounded-3xl flex flex-col gap-6"
      >
        <span style={{ fontFamily: "DM Serif Display" }} className="text-3xl">
          {headingText}
        </span>
        <span>{text}</span>
        <div
          style={{ backgroundColor: primaryColor, color: btnTextColor }}
          className=" text-lg inline self-start px-3 py-2 rounded-[35px] cursor-pointer hover:opacity-80 hover:shadow-xl"
        >
          Learn More
        </div>
      </div>
    </div>
  );
};

export default PlanCards;
