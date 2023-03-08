import React, { useContext } from "react";
import { StepperContext } from "./../../../modules/profile/contexts/StepperContext";

export default function Details() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col mt-12">
      <div className="w-full mx-2 flex-1">
        {/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Event Type
        </div> */}
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["eventType"] || ""}
            name="eventType"
            placeholder="Event Type"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        {/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Event Location
        </div> */}
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["eventLocation"] || ""}
            name="eventLocation"
            placeholder="Event Location"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        {/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Event Date
        </div> */}
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["eventDate"] || ""}
            name="eventDate"
            placeholder="Event Date"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        {/* <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Venue
        </div> */}
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            onChange={handleChange}
            value={userData["venue"] || ""}
            name="venue"
            placeholder="Venue"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  );
}
