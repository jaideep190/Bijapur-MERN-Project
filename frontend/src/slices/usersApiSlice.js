// frontend/src/slices/usersApiSlice.js

import { apiSlice } from './apiSlice';
const USERS_URL = 'https://bijapur-mern-project-3.onrender.com/api/users';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
    getCrimeDetails: builder.query({
      query: () => ({
        url: `${USERS_URL}/crimedetails`,
        method: 'GET',
      }),
    }),
    savePor: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/savepor`,
        method: 'POST',
        body: data,
      }),
    }),
    updateFormStatus: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/updateuserformstatus`,
        method: 'POST',
        body: data,
      }),
    }),
    getUserFormStatus: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/getuserformstatus`,
        method: 'POST',
        body: data,
      }),
    }),
    saveGiraftari: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/savegiraftari`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
  useGetCrimeDetailsQuery,
  useSavePorMutation,
  useUpdateFormStatusMutation,
  useGetUserFormStatusMutation,
  useSaveGiraftariMutation,
} = userApiSlice;

