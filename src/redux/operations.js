import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
// optimistic ui - frontendde silinen verinin backendde de silinmesi sırasında atılan sorgunun kullanıcıya gecikmeli verilmeden gösterilmesi sayfanın gecikmesiz update edilmesi

axios.defaults.baseURL = "https://68e41da98e116898997b0a25.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("/contacts");
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const addContact = createAsyncThunk("contacts/addContact", async (contact, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", contact);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data.id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});