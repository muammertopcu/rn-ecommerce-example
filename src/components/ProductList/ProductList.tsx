import React, {ReactElement} from 'react';
import {FlatList} from 'native-base';
import type {Product} from '@types';
import {ProductListItem} from '@components';

interface Props {
  data: Product[];
  onPress: (product: Product) => void;
  refetch?: () => void;
  isFetching?: boolean;
}

const ProductList = ({
  data,
  onPress,
  refetch,
  isFetching = false,
}: Props): ReactElement => {
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
      refreshing={isFetching}
    />
  );
};

export default ProductList;
