import { Checkbox } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";

const listTags = ["produc", "marketing", "design"];

const Setting = () => {
  return (
    <div className="mt-8 bg-white rounded-lg p-8">
      <h1 className="text-[#942F70] bg-[#FEF452] w-fit leading-[60px] text-[32px] font-bold px-3">
        Setting
      </h1>
      <div className="flex gap-3 items-center mt-6">
        <Checkbox />
        <p>I want to approve attendees</p>
      </div>
      <div>
        <p className="font-medium text-base mt-6">Privacy</p>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{ display: "flex", flexDirection: "row", width: "100%" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Public"
              sx={{ display: "flex", alignItems: "center" }}
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Curated Audience"
            />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="Community Only"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <div>
        <p className="font-medium text-base mt-6">Tag your social</p>
        <p className="text-base">
          Pick tags for our curation engine to work its magin
        </p>
      </div>
      <div className="mt-6">
        <p className="flex items-center bg-[#F9F5FF] rounded-lg w-fit py-1 px-[14px] text-[#942F70] cursor-pointer">
          Engineering
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </p>
        <div className="mt-[18px] flex gap-2 capitalize">
          {listTags.map((item, index) => (
            <p
              key={index}
              className="bg-[#F2F4F7] py-[2px] px-[10px] w-fit rounded-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Setting;
