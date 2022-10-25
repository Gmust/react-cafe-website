import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IContacts} from "../models/contacts.models";
import {BASE_API_URL} from "../utils/consts";


export const contactsApi = createApi({
        reducerPath: 'contactsApi',
        baseQuery: fetchBaseQuery({
            baseUrl: BASE_API_URL,
        }),
        endpoints: (builder) => ({
                sendQuestion: builder.mutation< void ,IContacts[]>({
                    //@ts-ignore
                    query: (params:{email: string, textVal: string}) => ({
                        url: `/questions`,
                        method: 'POST',
                        body: params,
                    }),
                })
            }
        )
    }
);


export const {useSendQuestionMutation} = contactsApi