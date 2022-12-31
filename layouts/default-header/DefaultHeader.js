import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../public/imgs/logo.png";

const listNav = ["Blog", "Socials", "Past Socials", "Clubs", "Contact"];

const DefaultHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <Link href={"/"}>
        <Image src={logo} width={200} height={35} alt="logo" />
      </Link>
      <ul className="flex gap-[48px]">
        {listNav.map((item, index) => {
          return item === "Clubs" ? (
            <li key={index} className="flex items-center cursor-pointer">
              <p className="mr-[13px]">{item}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                // className="w-[10px] h-[5px]"
                width={15}
                height={15}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
          ) : (
            <li key={index}>{item}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default DefaultHeader;
