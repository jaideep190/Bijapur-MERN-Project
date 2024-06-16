import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: 'https://bijapur-mern-project-3.onrender.com' });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: (builder) => ({}),
});
