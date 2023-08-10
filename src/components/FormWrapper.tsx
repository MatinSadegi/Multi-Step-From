import React from "react";
import { FormWrapperProps } from "../types";

const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  title,
  explanation,
}) => {
  return (
    <div className="">
      <h2 className=" font-bold text-xl sm:text-3xl  text-marine-blue">
        {title}
      </h2>
      <p className=" text-sm sm:text-base text-cool-gray mt-2 mb-7 ">
        {explanation}
      </p>
      {children}
    </div>
  );
};

export default FormWrapper;
