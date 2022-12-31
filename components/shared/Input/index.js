import React from "react";
import DatePicker from "./components/DatePicker";
import TimePicker from "./components/TimePicker";

const Input = ({
  type,
  setData,
  data,
  disable,
  className,
  placeholder,
  defaultValue,
}) => {
  return type === "date" ? (
    <DatePicker
      setData={setData}
      data={data}
      disable={disable}
      defaultValue={defaultValue}
      className={className}
    />
  ) : type === "time" ? (
    <TimePicker
      setData={setData}
      data={data}
      disable={disable}
      defaultValue={defaultValue}
      className={className}
    />
  ) : type === "number" ? (
    <input
      type={"number"}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  ) : (
    <input
      type={"text"}
      className={className}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
