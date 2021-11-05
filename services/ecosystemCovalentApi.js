import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import DexButton from '../components/Button/DexButton';

// Define a service using a base URL and expected endpoints
const APIKey = ""
const chainID = 1
const dexName = 'sushiswap' 

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

