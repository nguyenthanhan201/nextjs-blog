import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const listImgs = [
  "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://i.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  "https://i.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ",
  "https://i.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4",
  "https://i.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
  "https://i.picsum.photos/id/19/2500/1667.jpg?hmac=7epGozH4QjToGaBf_xb2HbFTXoV5o8n_cYzB7I4lt6g",
  "https://i.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I",
  "https://i.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
  "https://i.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
  "https://i.picsum.photos/id/7/4728/3168.jpg?hmac=c5B5tfYFM9blHHMhuu4UKmhnbZoJqrzNOP9xjkV4w3o",
];

const ModalAddBanner = ({
  selectedImg,
  setSelectedImg,
  handleClose,
  setData,
  data,
}) => {
  return (
    <Box sx={style}>
      <div className="flex items-center justify-between px-3 pt-3 border-b border-gray-500 mb-3">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Choose a banner
        </Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 cursor-pointer"
          onClick={handleClose}
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </div>
      <div className="flex w-[calc(100%+12px)] flex-wrap px-3 pb-3 -mx-2">
        {listImgs.map((item, index) => (
          <div
            key={index}
            className={`${
              selectedImg === item &&
              "border-2 border-[#FEF452] scale-110 transition-all"
            } w-[calc(20%-16px)] my-2 mx-2 relative`}
          >
            <Image
              src={item}
              width={250}
              height={150}
              loading="lazy"
              alt="Picture of the author"
              onClick={() => setSelectedImg(item)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center px-3 pb-3 gap-3">
        <button type="button" onClick={handleClose}>
          Close
        </button>
        <button
          type="button"
          className="bg-[#FEF452] text-[#942F70] font-bold px-3 py-1 rounded-lg"
          onClick={() => {
            setData({ ...data, image: selectedImg });
            handleClose();
          }}
        >
          Save
        </button>
      </div>
    </Box>
  );
};

export default ModalAddBanner;
