import {IOrders} from "../models/orders.models";
import {mainApi} from "./mainApi";

export const basketApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        sendOrder: builder.mutation<void, IOrders>({
            query: (params) => ({
                url: '/orders',
                method: 'POST',
                body: params
            })
        }),
    }),
    overrideExisting: false
})

export const {useSendOrderMutation} = basketApi

