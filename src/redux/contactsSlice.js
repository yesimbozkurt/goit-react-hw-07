import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(deleteContact.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.items.findIndex(contact => contact.id === action.payload);
                state.items.splice(index, 1);
            })
            .addCase(deleteContact.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

    },
    reducers: {},
});

export const selectContacts = (state) => state.contacts.items;
export const selectFilter = (state) => state.filters.search;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        const normalizedFilter = filter ? filter.toLowerCase() : '';
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter)
        );
    }
);

export const { fetchContactsRequest, fetchContactsSuccess, fetchContactsError } = contactsSlice.actions;
export default contactsSlice.reducer;
