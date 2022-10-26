import {IDishes} from "../models/dishes.models";
import {mainApi} from "./mainApi";


export const dishesApi = mainApi.injectEndpoints({
    endpoints: (builder) => ({
        dishes: builder.query<IDishes[], string>({
            query: (type) => '/dishes?type=' + type,
            providesTags: ['Dishes']
        }),
        types: builder.query<[], void>({
            query: () => '/types',
        }),
    }),
    overrideExisting: false,
})

export const {useDishesQuery, useTypesQuery} = dishesApi