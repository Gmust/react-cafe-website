import {IBooking, IBookingContact} from "../models/booking.model";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BOOKING_API_URL} from "../utils/consts";


export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BOOKING_API_URL,
    }),
    endpoints: (builder) => ({
        sendBookingOrder: builder.mutation<void, IBooking>({
            query: (params) => ({
                url: '/booking',
                method: 'POST',
                body: params,
            })
        })
    })
})


export const {useSendBookingOrderMutation} = bookingApi