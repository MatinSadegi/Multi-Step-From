import React from "react";
import { FormWrapper } from ".";
import { StepProps } from "../types";
import { plans, addOns } from "../utils";

const Summary: React.FC<StepProps> = ({
  planName,
  planLength,
  activeServices,
}) => {
  const currentPlan = plans.filter((item) => item.planTitle === planName);

  const planTotal = planLength
    ? currentPlan[0].planTimePerYear
    : currentPlan[0].plantTimePerMonth;
    
  let serviceTotal = 0;

  return (
    <FormWrapper
      title=" Finishing up"
      explanation="Double-check everything looks OK before confirming."
    >
      <div className=" bg-Magnolia p-5 rounded-md text-sm text-marine-blue">
        <div>
          <div className=" border-b mb-4">
            <div className="flex justify-between items-center mb-1 font-medium text-base">
              <h4 className=" ">
                {planName}({planLength ? "Yearly" : "Monthly"})
              </h4>
              <h4 className=" ">
                $
                {planLength
                  ? currentPlan[0].planTimePerYear
                  : currentPlan[0].plantTimePerMonth}
                /{planLength ? "yr" : "mo"}
              </h4>
            </div>
            <p className=" mb-4 text-cool-gray underline">Change</p>
          </div>

          {activeServices.map((item) => {
            const currentServices = addOns.filter(
              (event) => event.service === item
            );
            serviceTotal = planLength
              ? serviceTotal + currentServices[0].servicePerYear
              : serviceTotal + currentServices[0].servicePerMonth;
            console.log(serviceTotal);
            return (
              <div
                key={currentServices[0].explanation}
                className="flex justify-between items-center "
              >
                <p className="text-cool-gray">{currentServices[0].service}</p>
                <p className="font-medium">
                  +
                  {planLength
                    ? currentServices[0].servicePerYear
                    : currentServices[0].servicePerMonth}
                  $/{planLength ? "yr" : "mo"}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-4">
        <p className=" text-cool-gray text-sm">
          Total (per {planLength ? "year" : "month"})
        </p>
        <p className="font-bold text-purplish-blue text-base">
          +${serviceTotal + planTotal}/{planLength ? "yr" : "mo"}
        </p>
      </div>
    </FormWrapper>
  );
};

export default Summary;
