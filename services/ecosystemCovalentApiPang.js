import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
const APIKey = "ckey_4e73d56514984838ab3206fbaf4"
const chainID = 43114
const dexName = 'pangolin' 

export const ecosystemApi = createApi({
    reducerPath: 'ecosystemApi',

    baseQuery: fetchBaseQuery({
        baseUrl: ( `https://api.covalenthq.com/v1/${chainID}/xy=k/${dexName}/ecosystem/?key=${APIKey}`)
    }),
    endpoints: (builder) => ({
        getEcosystem: builder.query({
         query: () => '/ecosystem/',
        }),
    }),
})


export const { useGetEcosystemQuery } = ecosystemApi;

