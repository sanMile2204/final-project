import { ContactData } from "../../store/features/ContactSlice";
import ButtonProps from "../Button/ButtonsProps";

  export interface ContactProps {
    contact: ContactData;
    buttons: ButtonProps[];
  }