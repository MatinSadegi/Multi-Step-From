import React from "react";
import { FormWrapperProps } from "../types";

const FormWrapper: React.FC<FormWrapperProps> = ({
  children,
  title,
  explanation,
}) => {
  return (
    <div className="">
      <h2 className=" font-bold text-3xl pt-12 text-marine-blue">{title}</h2>
      <p className="mt-4 mb-8 text-cool-gray">{explanation}</p>
      {children}
    </div>
  );
};

export default FormWrapper;
