import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {Product} from '@types';

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface ProductsParams {
  searchParameter: string;
  limit: number;
  skip: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com',
  }),
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, ProductsParams>({
      query: ({limit, skip, searchParameter}) => ({
        url: `/products/search?limit=${limit}&skip=${skip}&q=${searchParameter}`,
      }),
    }),
    getProductDetail: builder.query<Product, number>({
      query: id => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {useGetProductsQuery, useGetProductDetailQuery} = productsApi;
