import React, {Fragment, ReactElement, useState} from 'react';
import type {Product} from '@types';
import {ProductList, ProductListSkeleton, SearchInput} from '@components';
import {useGetProductsQuery} from '@redux/api/products';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HStack} from 'native-base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({navigation}: Props): ReactElement => {
  const {top} = useSafeAreaInsets();
  const [searchParameter, setSearchParameter] = useState<string>('');
  const {data, isLoading, refetch, isFetching} =
    useGetProductsQuery(searchParameter);

  const handlePress = (product: Product) => {
    navigation.navigate('ProductDetail', {productId: product.id});
  };

  const searchHandler = (query: string) => {
    setSearchParameter(query);
    refetch();
  };

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  const products = data?.products as Product[];

  return (
    <Fragment>
      <HStack pt={top} pb={2} px={3} backgroundColor={'muted.50'} shadow={1}>
        <SearchInput
          placeholder={'Search products...'}
          onChangeText={searchHandler}
        />
      </HStack>

      <ProductList
        data={products}
        refetch={refetch}
        isFetching={isFetching}
        onPress={handlePress}
      />
    </Fragment>
  );
};

export default Home;
