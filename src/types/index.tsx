import { ReactNode } from "react";

export interface FormItems {
  name: string;
  email: string;
  phone: string;
  planName: string;
  planLength: boolean;
}
export interface SidebarProps {
  sidebar: string[];
  currentStep: number;
}

export interface FormWrapperProps {
  children: ReactNode;
  title: string;
  explanation: string;
}

export type StepProps = 
  FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
}

