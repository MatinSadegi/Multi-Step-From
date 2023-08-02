import React from "react";
import { FormWrapper } from ".";
import { plans } from "../utils";

const SelectPlan: React.FC = () => {
  return (
    <FormWrapper
      title="Select your plan"
      explanation="You have the option of monthly or yearly billing."
    >
      <div className="flex gap-4">
        {plans.map((plan) => (
          <div
            key={plan.planTitle}
            className="border border-cool-gray p-4 w-32 rounded-md"
          >
            <img src={plan.planeIcon} alt={`${plan.planTitle}-icon`} />
            <h4 className="mt-8 font-medium  text-marine-blue">
              {plan.planTitle}
            </h4>
            <p className="font-normal text-sm text-cool-gray">
              {plan.plantTimePerMonth}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center text-sm font-medium gap-3 bg-Magnolia mt-7 py-2.5 rounded-md">
        <p className=" text-cool-gray">Monthly</p>
        <div></div>
        <p>Yearly</p>
      </div>
    </FormWrapper>
  );
};

export default SelectPlan;
