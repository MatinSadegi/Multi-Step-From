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

  const {
    handleSubmit,
    register,
    formState: { errors },
    clearErrors,
  } = useForm<Partial<FormItems>>({
    resolver: zodResolver(BasicPersonalFormSchema),
  });

  const updateForm = (fieldToUpdate: Partial<FormItems>) => {
    setFormData({ ...formData, ...fieldToUpdate });
  };

  const submitData = () => {
    next();
  };

  return (
    <div className="bg-Magnolia h-screen relative overflow-hidden sm:h-screen sm:flex sm:items-center justify-center ">
      <div className=" w-screen   overflow-hidden sm:bg-white sm:w-[95vw] md:w-[90vw]  lg:w-[70vw] sm:h-[75vh] sm:flex sm:justify-between xl:justify-normal sm:p-4 sm:rounded-xl   ">
        <SideBar sidebar={sidebar} currentStep={currentStepIndex} />
        <form
          onSubmit={handleSubmit(submitData)}
          className=" sm:overflow-x-hidden  sm:flex sm:flex-col sm:justify-between "
        >
          <div className=" w-[90vw] mx-auto p-7 sm:py-10 sm:px-16 rounded-xl  sm:translate-y-0 -translate-y-10  bg-white flex flex-col justify-between sm:w-full">
            {currentStepIndex === 0 && (
              <PersonalInfo
                {...formData}
                updateForm={updateForm}
                register={register}
                nameError={errors?.userName?.message}
                emailError={errors?.email?.message}
                phoneError={errors?.phone?.message}
                cleanErrors={clearErrors}
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
            {sidebar.length === currentStepIndex && <FinishingUp />}
          </div>
          {sidebar.length !== currentStepIndex && (
            <div
              className={` w-screen bg-white p-5  flex  absolute bottom-0  sm:w-full sm:static sm:py-0 sm:px-14 ${
                isFirstStep ? "justify-end" : "justify-between "
              } items-center`}
            >
              {!isFirstStep && (
                <button
                  onClick={back}
                  type="button"
                  className=" text-cool-gray font-medium hover:text-marine-blue "
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
    </div>
  );
};

export default App;
