import React, { useState } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SideBar,
  PersonalInfo,
  SelectPlan,
  AddOns,
  Summary,
  FinishingUp,
} from "./components";
import { FormItems } from "./types";
import { sidebar } from "./utils";
import { BasicPersonalFormSchema } from "./models/PersonalFormModel";

const initialValues: FormItems = {
  userName: "",
  email: "",
  phone: "",
  planName: "Arcade",
  planLength: false,
  activeServices: ["Online service"],
};

const App: React.FC = () => {
  const [formData, setFormData] = useState(initialValues);
  const { isLastStep, isFirstStep, currentStepIndex, next, back } =
    useMultiStepForm(sidebar.length);

  const { handleSubmit,register,formState:{errors},clearErrors } = useForm<Partial<FormItems>>({
    resolver: zodResolver(BasicPersonalFormSchema),
  });

  const updateForm = (fieldToUpdate: Partial<FormItems>) => {
    setFormData({ ...formData, ...fieldToUpdate });
  };

  const submitData = () => {
    
    next();
  };

  return (
    <div className=" w-[90vw]  md:w-[63vw] overflow-hidden h-[80vh] flex justify-between absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SideBar sidebar={sidebar} currentStep={currentStepIndex} />

      <form
        onSubmit={handleSubmit(submitData)}
        className="flex flex-col justify-between"
      >
        {currentStepIndex === 0 && (
          <PersonalInfo
            {...formData}
            updateForm={updateForm}
            register={register}
            nameError={errors?.userName?.message}
            emailError={errors?.email?.message}
            phoneError={errors?.phone?.message}
            cleanErrors ={clearErrors}
          />
        )}
        {currentStepIndex === 1 && (
          <SelectPlan {...formData} updateForm={updateForm} />
        )}
        {currentStepIndex === 2 && (
          <AddOns {...formData} updateForm={updateForm} />
        )}
        {currentStepIndex === 3 && (
          <Summary {...formData} updateForm={updateForm} />
        )}
        {sidebar.length === currentStepIndex ? (
          <FinishingUp />
        ) : (
          <div className=" flex justify-between items-center mb-2">
            {!isFirstStep && (
              <button
                onClick={back}
                type="button"
                className=" text-cool-gray hover:text-marine-blue "
              >
                Go Back
              </button>
            )}
            <button type="submit" className="next-button-style">
              {isLastStep ? "Confirm" : "Next Step"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default App;
