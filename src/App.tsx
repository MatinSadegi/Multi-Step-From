import React, { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { SideBar, PersonalInfo,SelectPlan } from "./components";
import { FormItems } from "./types";
import { sidebar } from "./utils";

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
};

const App: React.FC = () => {
  const [formData, setFormData] = useState(initialValues);
  const { isLastStep, isFirstStep, currentStepIndex } = useMultiStepForm(sidebar.length);
  return (
    <div className=" w-[90vw]  md:w-[63vw] overflow-hidden h-[80vh] flex justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SideBar sidebar={sidebar} currentStep={currentStepIndex} />

      <div className="flex flex-col justify-between">
        {/* <PersonalInfo /> */}
        <SelectPlan/>
        <div className=" flex justify-between items-center mb-2">
          {!isFirstStep && (
            <button type="button" className=" text-cool-gray hover:text-marine-blue ">
              Go Back
            </button>
          )}
          <button type="submit" className="next-button-style">
            {isLastStep ? "Confirm" : "Next Step"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
