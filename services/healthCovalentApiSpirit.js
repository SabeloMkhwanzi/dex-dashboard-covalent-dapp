import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const APIKey = "ckey_4e73d56514984838ab3206fbaf4"
const chainID = 250
const dexName = 'spiritswap' 

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

