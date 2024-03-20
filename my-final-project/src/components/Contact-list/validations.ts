import { ContactData } from "../../store/features/ContactSlice";

export const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

export const isText = (text: string) => {
    return /^[a-zA-Z]+$/.test(text);
  };

export const isValid = (formData: ContactData) => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
        return false;
      }
    return true;
}