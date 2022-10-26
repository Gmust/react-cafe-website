import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {IContacts} from "../models/contacts.models";
import {mainApi} from "./mainApi";


export const contactsApi = mainApi.injectEndpoints({
        endpoints: (builder) => ({
                sendQuestion: builder.mutation< void ,IContacts[]>({
                    //@ts-ignore
                    query: (params:{email: string, textVal: string}) => ({
                        url: `/questions`,
                        method: 'POST',
                        body: params,
                    }),
                })
            }),
        overrideExisting: false,
    }
);


export const {useSendQuestionMutation} = contactsApi