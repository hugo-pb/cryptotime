import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "ade781d8d5msh8d229cfc059ddf9p1ae5e3jsn9f0c2a529f0d",
};
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({url, headers: cryptoHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`)
      })
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;





