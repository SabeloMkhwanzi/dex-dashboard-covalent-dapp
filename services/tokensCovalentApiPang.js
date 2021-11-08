import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const APIKey = "ckey_4e73d56514984838ab3206fbaf4"
const chainID = 43114
const dexName = 'pangolin' 

export const tokensApi = createApi({
    reducerPath: 'tokensApi',

    baseQuery: fetchBaseQuery({
        baseUrl: ( `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/tokens/?key=${APIKey}`)
    }),
    endpoints: (builder) => ({
        getTokens: builder.query({
         query: () => '/tokens/',
        }),
    }),
})


export const { useGetTokensQuery } = tokensApi;

