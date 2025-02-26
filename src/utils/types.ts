import { IconType } from "react-icons";

export type Transaction ={
    id: number;
    title: string;
    date: string;
    amount: string;
    Icon:IconType;
    bgColor:string;
    amountColor:string

  }

  export interface CardProps {
    balance: number;
    cardHolder: string;
    validThru: string;
    cardNumber: string;
    isPrimary?: boolean;
  }
  