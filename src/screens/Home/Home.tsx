import React, {ReactElement} from 'react';
import type {Product} from '@types';
import {ProductList, ProductListSkeleton} from '@components';
import {useGetProductsQuery} from '@redux/api/products';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({navigation}: Props): ReactElement => {
  const {data, isLoading, refetch, isFetching} = useGetProductsQuery();

  const handlePress = (product: Product) => {
    navigation.navigate('ProductDetail', {productId: product.id});
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
