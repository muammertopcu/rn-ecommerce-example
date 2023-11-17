import React, {ReactElement} from 'react';
import type {Product} from '@types';
import {ProductList, ProductListSkeleton} from '@components';
import {useGetProductsQuery} from '@redux/api/products';

const Home = (): ReactElement => {
  const {data, isLoading, refetch, isFetching} = useGetProductsQuery();

  const handlePress = (product: Product) => {
    console.log(product.id);
  };

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  const products = data?.products as Product[];

  return (
    <ProductList
      data={products}
      refetch={refetch}
      isFetching={isFetching}
      onPress={handlePress}
    />
  );
};

export default Home;
