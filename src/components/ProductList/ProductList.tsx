import React, {ReactElement} from 'react';
import {Box, FlatList, Spinner} from 'native-base';
import type {Product} from '@types';
import {ProductListItem} from '@components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  data: Product[];
  onPress: (product: Product) => void;
  nextHandler: () => void;
  refetch: () => void;
  isFetching: boolean;
}

const ProductList = ({
  data,
  onPress,
  nextHandler,
  refetch,
  isFetching = false,
}: Props): ReactElement => {
  const {bottom} = useSafeAreaInsets();

  return (
    <FlatList
      paddingX={2}
      paddingY={1}
      data={data}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <ProductListItem product={item} onPress={() => onPress(item)} />
      )}
      onRefresh={refetch}
      refreshing={false}
      onEndReached={() => !!data && nextHandler()}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        <Box justifyContent="center" alignItems="center">
          {isFetching && <Spinner color="muted.500" />}
        </Box>
      }
      contentContainerStyle={{paddingBottom: bottom + 10}}
    />
  );
};

export default ProductList;
