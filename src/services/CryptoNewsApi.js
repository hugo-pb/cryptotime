import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
 
    "X-BingApis-SDK": "true",
    "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    "X-RapidAPI-Key": "ade781d8d5msh8d229cfc059ddf9p1ae5e3jsn9f0c2a529f0d",
  
};

const baseURL = "bing-news-search1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi', baseQuery: fetchBaseQuery({ baseURL }),
    endpoints: (builder) => ({
        query: ({newsCategory, count}) => createRequest(`/cryptoNews?${count}`)
    })
})