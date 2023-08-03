import React from "react";
import { FormWrapper } from ".";
import { addOns } from "../utils";
import { StepProps } from "../types";
import checkMark from "../assets/images/icon-checkmark.svg";

const AddOns: React.FC<StepProps> = ({
  activeServices,
  planLength,
  updateForm,
}) => {
  return (
    <FormWrapper
      title="Pick add-ons"
      explanation="Add-ons help enhance your gaming experience."
    >
      <div className="">
        {addOns.map((item) => (
          <div
            key={item.service}
            onClick={() => {
              if (activeServices.includes(item.service)) {
                const newActiveServices = activeServices.filter(
                  (event) => event !== item.service
                );
                updateForm({ activeServices: [...newActiveServices] });
              } else {
                updateForm({
                  activeServices: [...activeServices, item.service],
                });
              }
            }}
            className={`flex justify-between items-center border rounded-md p-4 mb-4 border-light-gray hover:border-purplish-blue ${
              activeServices.includes(item.service)
                ? "  bg-Magnolia"
                : "bg-white"
            }`}
          >
            <div className="flex items-center ">
              <div
                className={`w-[17px] h-[17px] border-light-gray rounded flex justify-center items-center ${
                  activeServices.includes(item.service)
                    ? " bg-purplish-blue"
                    : "bg-white border"
                }`}
              >
                <img
                  src={checkMark}
                  alt="check"
                  className={`w-2.5 ${
                    activeServices.includes(item.service) ? "block" : "hidden"
                  }`}
                />
              </div>
              <div className="ml-6">
                <h4 className="font-medium  text-marine-blue">
                  {item.service}
                </h4>
                <p className="font-normal text-xs text-cool-gray">
                  {item.explanation}
                </p>
              </div>
            </div>
            <p className=" text-purplish-blue text-sm">
              +${planLength ? item.servicePerYear : item.servicePerMonth}/
              {planLength ? "yr" : "mo"}
            </p>
          </div>
        ))}
      </div>
    </FormWrapper>
  );
};

export default AddOns;
