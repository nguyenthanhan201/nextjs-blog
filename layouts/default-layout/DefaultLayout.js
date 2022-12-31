import React from "react";
import DefaultHeader from "../default-header/DefaultHeader";

const DefaultLayout = ({ children }) => {
  return (
    <div className="w-full h-full px-[112px] py-[22px] layout">
      <DefaultHeader />
      {children}
    </div>
  );
};

export default DefaultLayout;
