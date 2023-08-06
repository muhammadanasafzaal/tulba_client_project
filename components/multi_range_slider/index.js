import React, { useState } from "react";

function MultiRangeSlider(props) {
  const [values, setValues] = useState(props.values);

  function handleChange(event) {
    console.log('event', event);
    // newValues[index] = event.target.value;
    setValues(event);
  }
  return (
    <div className="flex justify-between flex-column w-full">
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        className="w-full px-3 m-4 h-1 border bg-[#000000] appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
        onChange={(event) => handleChange(event.target.value)}
      />
      <div>{`${values}$-$${props?.max}`}</div>
    </div>
  );
}

export default MultiRangeSlider;
