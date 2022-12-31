import React from "react";
import { CapacityIcon, PriceIcon, VenueIcon } from "../../../../lib/svg";
import AddBanner from "../../../index/home/AddBanner";
import Input from "../../Input";

const BlogContentEdit = ({ setData, data }) => {
  return (
    <>
      <div className="w-[40%]">
        <p
          contentEditable="true"
          suppressContentEditableWarning={true}
          className="text-[48px] font-bold text-white bg-[#942F70] px-3 py-1 mb-7 w-full"
          onInput={(e) => {
            setData({ ...data, title: e.currentTarget.textContent });
          }}
        >
          Untitle Event
        </p>
        <div className="flex justify-between">
          <Input type="date" setData={setData} data={data} />
          <Input type="time" setData={setData} data={data} />
        </div>
        <div className="flex items-center gap-3 mt-7 mb-3">
          <VenueIcon />
          <Input type="text" className="rounded-md" placeholder="Venue" />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-[10px]">
            <CapacityIcon />
            <Input
              type={"number"}
              className="rounded-md"
              placeholder="Max capacity"
            />
          </div>

          <div className="flex items-center justify-between gap-[10px]">
            <PriceIcon />
            <Input
              type={"number"}
              className="rounded-md"
              placeholder="Cost per person"
            />
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <AddBanner setData={setData} data={data} />
      </div>
    </>
  );
};

export default BlogContentEdit;
