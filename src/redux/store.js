import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { contactsReducer } from "./contacts/contactSlice";
import { filtersReducer } from "./filter/filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
        auth: authReducer
    }
})