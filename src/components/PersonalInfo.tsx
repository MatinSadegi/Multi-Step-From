import React from "react";
import { FormWrapper } from ".";

const PersonalInfo: React.FC = () => {
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
          className="input-style"
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
        />
      </div>
    </FormWrapper>
  );
};

export default PersonalInfo;
