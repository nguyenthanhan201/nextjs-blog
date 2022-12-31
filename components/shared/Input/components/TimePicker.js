import React from "react";

const TimePicker = ({ setData, data, disable, defaultValue, className }) => {
  // console.log("👌 ~ defaultValue", defaultValue);
  return (
    <div className="flex items-center gap-[18px]">
      <label htmlFor="time">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 33.7999C26.2783 33.7999 33.7999 26.2783 33.7999 17C33.7999 7.72157 26.2783 0.199951 17 0.199951C7.72157 0.199951 0.199951 7.72157 0.199951 17C0.199951 26.2783 7.72157 33.7999 17 33.7999ZM18 8.59995C18 8.04767 17.5522 7.59995 17 7.59995C16.4477 7.59995 16 8.04767 16 8.59995V17C16 17.2652 16.1053 17.5195 16.2928 17.7071L22.2325 23.6468C22.6231 24.0373 23.2562 24.0373 23.6468 23.6468C24.0373 23.2562 24.0373 22.6231 23.6468 22.2325L18 16.5857V8.59995Z"
            fill="#14597A"
          />
        </svg>
      </label>
      <input
        defaultValue={defaultValue?.slice(11, 16)}
        disabled={disable}
        type={"time"}
        id="time"
        className={`rounded-lg ${className}`}
        onChange={(e) => setData({ ...data, time: e.target.value })}
      />
    </div>
  );
};

export default TimePicker;
