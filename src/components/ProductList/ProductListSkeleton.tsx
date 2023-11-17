import React from 'react';
import {FlatList} from 'native-base';
import {ProductListItemSkeleton} from '@components';

const ProductListSkeleton = () => {
  const data = Array.from({length: 10}, (_, i) => i.toString());
  return (
    <FlatList
      data={data}
      renderItem={() => <ProductListItemSkeleton />}
      numColumns={2}
      keyExtractor={item => item}
      paddingX={2}
      paddingY={1}
    />
  );
};

export default ProductListSkeleton;
