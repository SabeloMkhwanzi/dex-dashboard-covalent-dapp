import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const APIKey = ""
const chainID = 1
const dexName = 'sushiswap' 

export const healthApi = createApi({
    reducerPath: 'healthApi',

    baseQuery: fetchBaseQuery({
        baseUrl: ( `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/health/?key=${APIKey}`)
    }),
    endpoints: (builder) => ({
        getHealth: builder.query({
         query: () => '/health/',
        }),
    }),
})


export const { useGetHealthQuery } = healthApi;

