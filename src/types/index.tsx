import { ReactNode } from "react";

export interface FormItems {
  name: string;
  email: string;
  phone: string;
}
export interface SidebarProps {
  sidebar:string[],
  currentStep:number
  
}

export interface FormWrapperProps{
  children:ReactNode,
  title:string,
  explanation:string
}