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
  category?: string;
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
      query: ({limit, skip, searchParameter, category}) => ({
        url: category
          ? `/products/category/${category}?limit=${limit}&skip=${skip}`
          : `/products/search?limit=${limit}&skip=${skip}&q=${searchParameter}`,
      }),
    }),
    getCategories: builder.query<string[], void>({
      query: () => ({
        url: '/products/categories',
      }),
    }),
    getProductDetail: builder.query<Product, number>({
      query: id => ({
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductDetailQuery,
} = productsApi;
