import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContacts} from "../models/contacts.models";


const initialState = <IContacts> {
    isSent: false,
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setIsSent(state, action: PayloadAction<boolean>) {
            state.isSent = action.payload;
        }
    }
})


export const {setIsSent} = contactsSlice.actions;
export default contactsSlice.reducer;
