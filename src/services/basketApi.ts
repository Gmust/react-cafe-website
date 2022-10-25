import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_API_URL} from "../utils/consts";
import {IOrders} from "../models/orders.models";

export const basketApi = createApi({
    reducerPath: 'basketApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL
    }),
    endpoints: (builder) => ({
            sendOrder: builder.mutation<void, IOrders>({
                query:(params)=>({
                    url: '/orders',
                    method: 'POST',
                    body: params
                })
            })
        })
})

export const {useSendOrderMutation} = basketApi

