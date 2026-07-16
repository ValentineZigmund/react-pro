import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({

  reducerPath: 'api',

  baseQuery: fetchBaseQuery({
    baseUrl: 'http://jsonplaceholder.typicode.com'
  }),

  tagTypes: ['Tasks'],

  endpoints: () => ({}),

});