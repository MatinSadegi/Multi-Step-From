import React from "react";
import { FormWrapper } from ".";
import { StepProps } from "../types";

const PersonalInfo: React.FC<StepProps> = ({
  name,
  email,
  phone,
  updateForm,
}) => {
  return (
    <FormWrapper
      title="Personal info"
      explanation="Please provide your name, email address, and phone number."
    >
      <div>
        <label htmlFor="name" className=" text-marine-blue">
          Name
        </label>
        <br />
        <input
          id="name"
          placeholder="e.g.Stephen King"
          type="text"
          className="input-style"
          required
          value={name}
          onChange={(e) => updateForm({ name: e.target.value })}
        />
      </div>
      <div className="my-7">
        <label htmlFor="email" className=" text-marine-blue">
          Email Address
        </label>
        <br />
        <input
          id="email"
          placeholder="e.g.stephenking@lorem.com"
          type="email"
          autoComplete="email"
          className="input-style"
          required
          value={email}
          onChange={(e) => updateForm({ email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="phone" className=" text-marine-blue">
          Phone Number
        </label>
        <br />
        <input
          id="phone"
          placeholder="e.g. +1 234 567 890"
          type="tel"
          className=" input-style"
          value={phone}
          required
          onChange={(e) => updateForm({ phone: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
};

export default PersonalInfo;
