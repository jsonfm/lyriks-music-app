import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam.p.rapidapi.com",
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', import.meta.env.VITE_RAPID_API_KEY || "");
            headers.set('X-RapidAPI-Host', 'shazam.p.rapidapi.com')
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/track' }),
        getSongDetails: builder.query({ query: ({ songid }) => `/songs/get-details?key=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/songs/list-recommendations?key=${songid}&locale=en-US` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/get-details?id=${artistId}`}),
        getArtistTopSongs: builder.query({ query: (artistId) => `/artists/get-top-songs?id=${artistId}`})
    }),
})


export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetArtistTopSongsQuery
} = shazamCoreApi