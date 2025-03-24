
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const remontApi = createApi({
    reducerPath: 'remontApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (build) => ({
        getRemont: build.query({
            query: (name) => `pokemon/${name}`,
        }),
    }),
})

export const { useGetRemontQuery } = remontApi