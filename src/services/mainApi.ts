import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BASE_API_URL} from "../utils/consts";


export const mainApi = createApi({
    reducerPath: 'mainApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_API_URL,
    }),
    tagTypes: ['Dishes'],
    endpoints: () => ({}),
})