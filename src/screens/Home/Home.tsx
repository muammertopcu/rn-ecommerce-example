import React, {Fragment, ReactElement, useEffect, useState} from 'react';
import type {Product} from '@types';
import {ProductList, ProductListSkeleton, SearchInput} from '@components';
import {useGetProductsQuery} from '@redux/api/products';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HStack} from 'native-base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebouncedCallback} from 'use-debounce';

interface Props {
  navigation: NativeStackNavigationProp<any>;
}

const Home = ({navigation}: Props): ReactElement => {
  const {top} = useSafeAreaInsets();
  const limit: number = 10;
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParameter, setSearchParameter] = useState<string>('');
  const [skip, setSkip] = useState<number>(0);
  const {data, isLoading, refetch, isFetching} = useGetProductsQuery({
    searchParameter,
    limit,
    skip,
  });

  useEffect(() => {
    if (data) {
      const items = data.products as Product[];

      setProducts(prev => [...prev, ...items]);
      return;
    }
  }, [data]);

  const handlePress = (product: Product) => {
    navigation.navigate('ProductDetail', {productId: product.id});
  };

  const debounced = useDebouncedCallback(value => searchHandler(value), 250);

  const searchHandler = (query: string) => {
    setSkip(0);
    setProducts([]);
    setSearchParameter(query);
    refetch();
  };

  const nextPageHandler = () => {
    if (!isFetching && !!data && skip <= data.total) {
      setSkip(skip + limit);
      refetch();
    }
  };

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  return (
    <Fragment>
      <HStack
        pt={top + 2}
        pb={2}
        px={3}
        backgroundColor={'muted.50'}
        shadow={1}>
        <SearchInput
          placeholder={'Search products...'}
          onChangeText={debounced}
        />
      </HStack>

      <ProductList
        data={products}
        refetch={refetch}
        isFetching={isFetching}
        onPress={handlePress}
        nextHandler={nextPageHandler}
      />
    </Fragment>
  );
};

export default Home;
