import React from "react";
import { SidebarProps } from "../types";

const SideBar: React.FC<SidebarProps> = ({ sidebar, currentStep }) => {
  return (
    <div className="w-full p-10  text-white flex justify-center bg-cover sm:w-[350px] md:bg-contain    bg-sidebar-mobile bg-no-repeat sm:rounded-lg sm:bg-sidebar-desktop sm:block">
      {sidebar.map((item, index) => (
        <div key={index} className="flex items-center mb-8">
          <p
            className={`border px-3 py-1 font-medium rounded-[100%]  ${
              currentStep === index
                ? " text-marine-blue bg-light-blue"
                : "text-white"
            }`}
          >
            {index + 1}
          </p>
          <div className="ml-4">
            <p className=" hidden text-xs font-normal text-pastel-blue sm:block">
              STEP<span className="ml-1">{index + 1}</span>
            </p>
            <p className="hidden font-medium text-sm uppercase sm:block ">
              {item}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
