import React, { useState } from "react";

function MultiRangeSlider(props) {
  const [values, setValues] = useState(props.values);

  function handleChange(event) {
    const newValues = [...values];
    // newValues[index] = event.target.value;
    setValues(newValues);
  }

  return (
    <div className="flex justify-between w-full">
      <input
        type="range"
        min={props.min}
        step={props.step}
        className="w-full px-3 m-4 h-1 border bg-[#000000] appearance-none focus:outline-none focus:ring-2 focus:ring-red-500"
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}

export default MultiRangeSlider;
