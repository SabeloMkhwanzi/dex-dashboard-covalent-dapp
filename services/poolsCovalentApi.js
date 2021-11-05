import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
const APIKey = ""
const chainID = 1
const dexName = 'Sushiswap' 

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

