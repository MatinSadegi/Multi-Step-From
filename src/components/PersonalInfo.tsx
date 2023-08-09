import React from "react";
import { FormWrapper } from ".";
import { StepProps, FormItems } from "../types";
import {
  UseFormRegister,
  FieldValues,
  UseFormClearErrors,
} from "react-hook-form";

type PersonalFormProps = StepProps & {
  register: UseFormRegister<FieldValues>;
  nameError: string | undefined;
  emailError: string | undefined;
  phoneError: string | undefined;
  cleanErrors: UseFormClearErrors<Partial<FormItems>>;
};

const PersonalInfo: React.FC<PersonalFormProps> = ({
  userName,
  email,
  phone,
  updateForm,
  register,
  nameError,
  emailError,
  phoneError,
  cleanErrors,
}) => {
  return (
    <FormWrapper
      title="Personal info"
      explanation="Please provide your name, email address, and phone number."
    >
      <div className=" relative">
        <label htmlFor="name" className=" text-marine-blue">
          Name
        </label>
        {nameError && (
          <span className=" text-sm text-strawberry-red absolute right-0 top-0.5">
            {nameError}
          </span>
        )}
        <input
          id="name"
          placeholder="e.g.Stephen King"
          type="text"
          className={`input-style ${
            nameError ? " border-strawberry-red" : " border-light-gray"
          }`}
          value={userName}
          {...register("name")}
          onChange={(e) => updateForm({ userName: e.target.value })}
        />
      </div>
      <div className="my-7 relative">
        <label htmlFor="email" className=" text-marine-blue ">
          Email Address
        </label>
        {emailError && (
          <span className=" text-sm text-strawberry-red absolute right-0 top-0.5">
            {emailError}
          </span>
        )}
        <input
          id="email"
          placeholder="e.g.stephenking@lorem.com"
          type="email"
          autoComplete="email"
          className={`input-style ${
            emailError ? " border-strawberry-red" : " border-light-gray"
          }`}
          value={email}
          {...register("email")}
          onChange={(e) => updateForm({ email: e.target.value })}
          onFocus={() => cleanErrors("email")}
        />
      </div>
      <div className="relative">
        <label htmlFor="phone" className=" text-marine-blue">
          Phone Number
        </label>
        {phoneError && (
          <span className=" text-sm text-strawberry-red absolute right-0 top-0.5">
            {phoneError}
          </span>
        )}
        <input
          id="phone"
          placeholder="e.g. +1 234 567 890"
          type="tel"
          className={`input-style ${
            phoneError ? " border-strawberry-red" : " border-light-gray"
          }`}
          value={phone}
          {...register("phone")}
          onChange={(e) => updateForm({ phone: e.target.value })}
          onFocus={() => cleanErrors("phone")}
        />
      </div>
    </FormWrapper>
  );
};

export default PersonalInfo;
