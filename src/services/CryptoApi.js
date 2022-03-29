import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoHeaders = {
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  "X-RapidAPI-Key": "ade781d8d5msh8d229cfc059ddf9p1ae5e3jsn9f0c2a529f0d",
};
const baseUrl = "https://coinranking1.p.rapidapi.com/";

const createRequest = (url) => ({url, headers: cryptoHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('/coins')
        })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;





/*
const axios = require("axios");
const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    limit: "50",
    offset: "0",
    orderBy: "24hVolume",
    orderDirection: "desc",
  },
  headers: {
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
    "X-RapidAPI-Key":},
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
*/
