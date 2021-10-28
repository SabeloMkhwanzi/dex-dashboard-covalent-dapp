import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const APIKey = ""
const chainID = 1
const dexName = 'sushiswap' 

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

