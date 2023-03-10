import React from "react";

const DatePicker = ({ setData, data, disable, defaultValue, className }) => {
  // console.log("👌 ~ defaultValue", defaultValue);
  return (
    <div className="flex gap-[18px] items-center">
      <label htmlFor="date">
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
            d="M8.59995 0.199951C7.44015 0.199951 6.49995 1.14015 6.49995 2.29995V4.39995H4.39995C2.08036 4.39995 0.199951 6.28035 0.199951 8.59995V29.5999C0.199951 31.9195 2.08036 33.7999 4.39995 33.7999H29.5999C31.9195 33.7999 33.7999 31.9195 33.7999 29.5999V8.59995C33.7999 6.28036 31.9195 4.39995 29.5999 4.39995H27.4999V2.29995C27.4999 1.14015 26.5597 0.199951 25.4 0.199951C24.2402 0.199951 23.3 1.14015 23.3 2.29995V4.39995H10.7V2.29995C10.7 1.14015 9.75975 0.199951 8.59995 0.199951ZM8.59995 10.7C7.44015 10.7 6.49995 11.6402 6.49995 12.8C6.49995 13.9597 7.44015 14.9 8.59995 14.9H25.4C26.5597 14.9 27.4999 13.9597 27.4999 12.8C27.4999 11.6402 26.5597 10.7 25.4 10.7H8.59995Z"
            fill="#14597A"
          />
        </svg>
      </label>

      <input
        defaultValue={defaultValue?.slice(0, 10)}
        disabled={disable}
        type={"date"}
        id="date"
        placeholder="Date"
        className={`rounded-lg ${className}`}
        onChange={(e) => setData({ ...data, date: e.target.value })}
      />
    </div>
  );
};

export default DatePicker;
