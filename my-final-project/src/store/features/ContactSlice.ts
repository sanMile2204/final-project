import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addDispatch } from "../store";
import { MapContactsData } from "../../services/Users";

export interface ContactData {
  firstName: string;
  lastName: string;
  email: string;
  isFavorite: boolean;
  avatar?: string;
  id: number;
}

export interface ContactState {
  contacts: ContactData[];
}

const initialState: ContactState = {
  contacts: []
};

export const ContactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<ContactData>) => {
      state.contacts.push({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        isFavorite: action.payload.isFavorite,
        avatar: action.payload.avatar,
        id: state.contacts.length + 1 ,
      });
    },
    markAsFavorite: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id == action.payload ? { ...contact, isFavorite: true } : contact
      );
    },
    removeAsFavorite: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.map((contact) =>
        contact.id == action.payload ? { ...contact, isFavorite: false } : contact
      );
    },
    removeContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(contact => contact.id != action.payload)
    },
    setContacts: (state, action: PayloadAction<ContactData[]>) => {
      state.contacts = action.payload;
    },
  },
});

export default ContactSlice.reducer;
export const { addContact, markAsFavorite, setContacts, removeAsFavorite, removeContact } = ContactSlice.actions;

export const fetchDataFromApi = () => async (dispatch: addDispatch) => {
  try {
    const contactList = await MapContactsData();
    dispatch(setContacts(contactList));
  } catch (error) {
  }
};