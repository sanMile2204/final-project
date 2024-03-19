import { configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./features/ContactSlice";

export const store = configureStore({
    reducer: {
        contacts: ContactSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type addDispatch = typeof store.dispatch;

export default store;