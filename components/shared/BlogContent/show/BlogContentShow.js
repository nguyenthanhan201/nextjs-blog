import React, { useMemo } from "react";
import {
  CalenderIcon,
  CapacityIcon,
  PriceIcon,
  TimeIcon,
  VenueIcon,
} from "../../../../lib/svg";
import AddBanner from "../../../index/home/AddBanner";
import Input from "../../Input";

const BlogContentShow = ({ dataBlog }) => {
  const {
    banner,
    capacity,
    description,
    isManualApprove,
    price,
    privacy,
    startAt,
    title,
    tags,
    venue,
  } = dataBlog;
  // console.log("👌 ~ dataBlog", dataBlog);

  const formatDate = useMemo(() => {
    if (!startAt) return;
    const temp = new Date(startAt.slice(0, 10));
    return `${temp.toLocaleString("default", {
      month: "long",
    })} ${temp.getDate()}, ${temp.toLocaleString("default", {
      weekday: "short",
    })}`;
  }, [startAt]);

  const formatTime = useMemo(() => {
    if (!startAt) return;
    const temp = startAt.slice(11, 16);
    const hour = temp.slice(0, 2);
    if (hour > 12) {
      return `${hour - 12}:${temp.slice(3, 5)} PM`;
    }
    return `${hour}:${temp.slice(3, 5)} AM`;
  }, [startAt]);

  return (
    <>
      <div className="w-[40%]">
        <p
          contentEditable="true"
          suppressContentEditableWarning={true}
          className="text-[48px] font-bold text-white bg-[#942F70] px-3 py-1 mb-7 w-full"
        >
          {title}
        </p>
        <div className="flex justify-between">
          <div className="flex items-center gap-[15px]">
            <label htmlFor="time">
              <CalenderIcon />
            </label>
            <p className="font-semibold text-[28px] tracking-tighter">
              {formatDate}
            </p>
          </div>
          <div className="flex items-center gap-[15px]">
            <label htmlFor="time">
              <TimeIcon />
            </label>
            <p className="font-semibold text-[28px] tracking-tighter">
              {formatTime}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-7 mb-3">
          <VenueIcon />
          <Input
            type="text"
            className="rounded-md bg-transparent p-0 font-semibold"
            placeholder="Venue"
            defaultValue={venue}
          />
        </div>

        <div className="flex items-center">
          <div className="flex items-center justify-between gap-[10px]">
            <CapacityIcon />
            <Input
              type={"number"}
              className="rounded-md bg-transparent p-0 font-semibold"
              placeholder="Max capacity"
              defaultValue={capacity}
            />
          </div>

          <div className="flex items-center justify-between gap-[10px]">
            <PriceIcon />
            <Input
              type={"number"}
              className="rounded-md bg-transparent p-0 font-semibold"
              placeholder="Cost per person"
              defaultValue={price}
            />
          </div>
        </div>
      </div>
      <div className="w-[60%]">
        <AddBanner img={banner} />
      </div>
    </>
  );
};

export default BlogContentShow;
