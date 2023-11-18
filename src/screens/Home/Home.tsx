import React, {Fragment, ReactElement, useEffect, useState} from 'react';
import type {Product, RootStack} from '@types';
import {
  FilterButton,
  ProductList,
  ProductListSkeleton,
  SearchInput,
} from '@components';
import {useGetProductsQuery} from '@redux/api/products';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HStack, Pressable, Text, VStack} from 'native-base';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebouncedCallback} from 'use-debounce';
import {RouteProp} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {formattedTextFromSlug} from '@utils';

interface Props {
  navigation: NativeStackNavigationProp<RootStack>;
  route: RouteProp<RootStack, 'Home'>;
}

interface Filter {
  category: string | undefined;
  searchParameter: string;
  limit: number;
  skip: number;
}

const Home = ({navigation, route}: Props): ReactElement => {
  const {top} = useSafeAreaInsets();
  const [filter, setFilter] = useState<Filter>({
    category: undefined,
    searchParameter: '',
    limit: 10,
    skip: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);
  const {data, isLoading, refetch, isFetching} = useGetProductsQuery(filter);

  useEffect(() => {
    setProducts([]);

    setFilter(prev => ({
      ...prev,
      category: route.params?.category ?? undefined,
      skip: 0,
      searchParameter: '',
    }));
  }, [route.params]);

  const searchHandler = (query: string) => {
    setFilter(prev => ({
      ...prev,
      searchParameter: query,
      skip: 0,
    }));
    setProducts([]);
  };

  const resetFilter = () => {
    setProducts([]);

    setFilter(prev => ({
      ...prev,
      category: undefined,
      skip: 0,
      searchParameter: '',
    }));
  };

  const nextPageHandler = () => {
    if (!isFetching && !!data && filter.skip <= data.total) {
      setFilter(prev => ({
        ...prev,
        skip: prev.skip + prev.limit,
      }));
    }
  };

  useEffect(() => {
    if (data) {
      const items = data.products as Product[];

      setProducts(prev => [...prev, ...items]);
      return;
    }
  }, [data]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  const handlePress = (product: Product) => {
    navigation.navigate('ProductDetail', {productId: product.id});
  };

  const debounced = useDebouncedCallback(value => searchHandler(value), 250);

  if (isLoading) {
    return <ProductListSkeleton />;
  }

  return (
    <Fragment>
      <VStack
        pt={top + 2}
        pb={2}
        px={3}
        backgroundColor={'muted.50'}
        shadow={1}>
        <SearchInput
          placeholder={'Search products...'}
          onChangeText={debounced}
        />

        <HStack>
          <FilterButton
            onPress={() =>
              navigation.navigate('CategoryFilter', {
                category: filter.category,
              })
            }
          />
        </HStack>

        {filter.category && (
          <HStack>
            <Pressable flexDirection={'row'} onPress={resetFilter}>
              <Text>{formattedTextFromSlug(filter.category)}</Text>

              <Icon name={'cross'} size={20} />
            </Pressable>
          </HStack>
        )}
      </VStack>

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
