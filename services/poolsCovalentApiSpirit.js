import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const APIKey = "ckey_4e73d565149438ab3206fbaf4"
const chainID = 250
const dexName = 'spiritswap' 

export const poolsApi = createApi({
    reducerPath: 'poolsApi',

    baseQuery: fetchBaseQuery({
        baseUrl: ( `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/pools/?key=${APIKey}`)
    }),
    endpoints: (builder) => ({
        getPools: builder.query({
         query: () => '/pools/',
        }),
    }),
})


export const { useGetPoolsQuery } = poolsApi;

