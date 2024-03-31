import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchaseDelivery = {
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  products: Product[]
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseData = {
  products: Product[]
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    getMenuItem: builder.query<Prato, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchaseDelivery>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    }),
    secondPurchase: builder.mutation<PurchaseResponse, PurchaseData>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetBannerQuery,
  useGetMenuItemQuery,
  usePurchaseMutation,
  useSecondPurchaseMutation
} = api

export default api
