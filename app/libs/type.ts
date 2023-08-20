import type { ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */
export declare interface ModalProps {
  modal: 'seller-form' | string;
  onChange: (string: string) => void;
}

export declare interface SectionProps {
  header?: string;
  children: ReactNode;
  backgroundImage?: string;
  styles?: {
    wrapper?: string;
    container?: string;
    backgroundColor?: string;
  };
}

export type SituationProps = {
  type: string,
  description: string
}

export type ProcessCardProps = {
  image?: ReactNode;
  header?: string;
  content?: string;
  button?: ReactNode;  
}