import { useState } from "react";


export function useMultiStepForm(steps: number) {
  const [currentStepIndex, setCurrentStepIndex] = useState(2);

  function next() {
    if (currentStepIndex > steps - 1) return;
    setCurrentStepIndex((prev) => prev + 1);
  }
  function back() {
    if (currentStepIndex === 0) return;
    setCurrentStepIndex((prev) => prev - 1);
  }

  function goTo(index:number){
    setCurrentStepIndex(index)
  }

  return {
    next,
    back,
    goTo,
    currentStepIndex,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps - 1,
  };
}
