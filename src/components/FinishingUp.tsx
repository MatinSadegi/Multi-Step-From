import React from "react";
import thankYouIcon from '../assets/images/icon-thank-you.svg'


const FinishingUp: React.FC = () => {
  return (
    <div className="h-full flex items-center">
      <div className=" flex flex-col justify-center items-center">
        <img src={thankYouIcon} alt="thank-you-icon" />
        <h2 className=" font-bold text-3xl pt-10 text-marine-blue">
          Thank you!
        </h2>
        <p className="mt-4 text-cool-gray text-center">
          Thanks for confirming your subscription! We hope you have <br /> fun
          using our platform. If you ever need support, please feel <br /> free
          to email us at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default FinishingUp;
