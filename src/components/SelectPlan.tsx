import React from "react";
import { FormWrapper } from ".";
import { plans } from "../utils";
import { StepProps } from "../types";

const SelectPlan: React.FC<StepProps> = ({
  planName,
  planLength,
  updateForm,
}) => {
  return (
    <FormWrapper
      title="Select your plan"
      explanation="You have the option of monthly or yearly billing."
    >
      <div className=" gap-2 sm:justify-between sm:flex ">
        {plans.map((plan) => (
          <div
            key={plan.planTitle}
            onClick={() => updateForm({ planName: plan.planTitle })}
            className={`border mb-3 flex items-center border-cool-gray p-2.5 sm:p-4  rounded-md hover:border-purplish-blue sm:w-32 sm:mb-0 sm:block ${
              plan.planTitle === planName ? " bg-Magnolia" : "bg-white"
            }`}
          >
            <img src={plan.planeIcon} alt={`${plan.planTitle}-icon`} />
            <div className="ml-3">
              <h4 className="font-bold text-sm  text-marine-blue sm:mt-8 ">
                {plan.planTitle}
              </h4>
              <p className="font-normal text-xs text-cool-gray sm:text-sm">
                ${planLength ? plan.planTimePerYear : plan.plantTimePerMonth}/
                {planLength ? "yr" : "mo"}
              </p>
              <p
                className={`text-sm text-marine-blue  ${
                  planLength ? "block" : "hidden"
                }`}
              >
                2 months free
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-sm font-medium gap-3 bg-Magnolia mt-7 py-2.5 rounded-md">
        <p className={`${planLength ? "text-cool-gray" : "text-marine-blue"}`}>
          Monthly
        </p>
        <div
          onClick={() => {
            updateForm({ planLength: planLength ? false : true });
          }}
          className="flex bg-marine-blue w-8 h-[17px] p-[3px] rounded-full cursor-pointer"
        >
          <span
            className={` w-[10px] h-[10px] bg-white rounded-full transition-all  ${
              planLength ? "translate-x-[14px]" : "translate-x-0"
            }`}
          ></span>
        </div>
        <p
          className={`${planLength ? " text-marine-blue" : " text-cool-gray"}`}
        >
          Yearly
        </p>
      </div>
    </FormWrapper>
  );
};

export default SelectPlan;
