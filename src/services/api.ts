import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioItem, Prato } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<Prato[], void>({
      query: () => 'restaurantes'
    }),
    getBanner: builder.query<Prato, string>({
      query: (id) => `restaurantes/${id}`
    }),
    getMenuItem: builder.query<CardapioItem, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetBannerQuery,
  useGetMenuItemQuery
} = api

export default api
