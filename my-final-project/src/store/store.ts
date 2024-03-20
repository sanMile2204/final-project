import { Middleware, configureStore } from "@reduxjs/toolkit";
import ContactSlice from "./features/ContactSlice";

const persistMiddleware: Middleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState().contacts.contacts;
    sessionStorage.setItem('reduxContactList', JSON.stringify(state));
    return result;
};

export const store = configureStore({
    reducer: {
        contacts: ContactSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type addDispatch = typeof store.dispatch;

export default store;