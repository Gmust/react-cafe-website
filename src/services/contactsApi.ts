import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IContacts} from "../models/contacts.models";


export const contactsApi = createApi({
        reducerPath: 'contactsApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://6329c4704c626ff832c9cac9.mockapi.io/api',
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