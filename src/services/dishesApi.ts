import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IDishes} from "../models/dishes.models";


export const dishesApi = createApi({
    reducerPath: 'dishesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://6329c4704c626ff832c9cac9.mockapi.io/api',
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