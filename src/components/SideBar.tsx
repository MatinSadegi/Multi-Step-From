import React from "react";
import { SidebarProps } from "../types";

const SideBar: React.FC<SidebarProps> = ({ sidebar, currentStep }) => {
  return (
    <div className="min-w-[220px] w-[273px] h-[80vh] mr-10 p-10 text-white rounded-lg bg-sidebar-desktop  bg-no-repeat">
      {sidebar.map((item, index) => (
        <div key={index} className="flex items-center mb-8">
          <p
            className={`border px-3 py-1 font-medium rounded-[100%]  ${
              currentStep === index + 1 ? " text-marine-blue bg-light-blue" : "text-white"
            }`}
          >
            {index + 1}
          </p>
          <div className="ml-4">
            <p className=" text-xs font-normal  text-pastel-blue">
              STEP<span className="ml-1">{index + 1}</span>
            </p>
            <p className=" font-medium text-sm uppercase ">{item}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
