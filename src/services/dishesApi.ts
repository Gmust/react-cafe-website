import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IDishes} from "../models/dishes.models";
import {BASE_API_URL} from "../utils/consts";


export const dishesApi = createApi({
    reducerPath: 'dishesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
    }),
    tagTypes: ['Dishes'],
    endpoints: (builder) => ({
        dishes: builder.query<IDishes[], string>({
            query: (type) => '/dishes?type=' + type,
            providesTags: ['Dishes']
        }),
        types: builder.query<[], void>({
            query: () => '/types',
        }),

    })
})

export const {useDishesQuery, useTypesQuery} = dishesApi