import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBooking, IBookingContact} from "../models/booking.model";


const initialState = {
    time: null,
    booking: {} as IBookingContact
}


export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        setTime(state, action:PayloadAction<Date|null>) {
            // @ts-ignore
            state.time = action.payload!;
        },
        setBooking(state, action: PayloadAction<IBookingContact>) {
            state.booking = action.payload
        }
    }
})

export const {setBooking, setTime} = bookingSlice.actions;
export default bookingSlice.reducer;
