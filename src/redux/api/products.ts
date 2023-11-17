import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Product} from '@types';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, void>({
      query: () => ({
        url: '/products',
      }),
    }),
  }),
});

export const {useGetProductsQuery} = productsApi;
