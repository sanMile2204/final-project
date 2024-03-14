import ButtonProps from "./ButtonsProps";

  export interface ContactData {
    firstName: string;
    lastName: string;
    email: string;
    isFavorite: boolean;
    avatar?: string;
    id: number;
  };

  export interface ContactProps {
    contact: ContactData;
    buttons: ButtonProps[];
  }