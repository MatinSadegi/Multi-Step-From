import React, { useState } from "react";
import { FormWrapper } from ".";
import { plans } from "../utils";
import { StepProps } from "../types";


const SelectPlan: React.FC<StepProps> = ({
  planName,
  planLength,
  updateForm,
}) => {
  const [isYearly, setIsYearly] = useState(planLength);
  return (
    <FormWrapper
      title="Select your plan"
      explanation="You have the option of monthly or yearly billing."
    >
      <div className="flex gap-4">
        {plans.map((plan) => (
          <div
            key={plan.planTitle}
            onClick={() =>
              updateForm({ planName: plan.planTitle, planLength: isYearly })
            }
            className={`border border-cool-gray p-4 w-32 rounded-md hover:border-purplish-blue ${
              plan.planTitle === planName ? " bg-Magnolia" : "bg-white"
            }`}
          >
            <img src={plan.planeIcon} alt={`${plan.planTitle}-icon`} />
            <h4 className="mt-8 font-medium  text-marine-blue">
              {plan.planTitle}
            </h4>
            <p className="font-normal text-sm text-cool-gray">
              ${isYearly ? plan.planTimePerYear : plan.plantTimePerMonth}/{isYearly? "yr" : "mo"}
            </p>
            <p
              className={`text-sm text-marine-blue  ${
                isYearly ? "block" : "hidden"
              }`}
            >
              2 months free
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-sm font-medium gap-3 bg-Magnolia mt-7 py-2.5 rounded-md">
        <p className={`${isYearly ? "text-cool-gray" : "text-marine-blue"}`}>
          Monthly
        </p>
        <div
          onClick={() => {
            setIsYearly(!isYearly);
          }}
          className="flex bg-marine-blue w-8 h-[17px] p-[3px] rounded-full cursor-pointer"
        >
          <span
            className={` w-[10px] h-[10px] bg-white rounded-full transition-all  ${
              isYearly ? "translate-x-[14px]" : "translate-x-0"
            }`}
          ></span>
        </div>
        <p className={`${isYearly ? " text-marine-blue" : " text-cool-gray"}`}>
          Yearly
        </p>
      </div>
    </FormWrapper>
  );
};

export default SelectPlan;
