import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY || "");
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/songs/list-recommendations?key=484129036&locale=en-US' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` })
    }),
})


export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi