import React, {ReactElement} from 'react';
import {FlatList} from 'native-base';
import type {Product} from '@types';
import {ProductListItem} from '@components';

interface Props {
  data: Product[];
}

const ProductList = ({data}: Props): ReactElement => {
  return (
    <FlatList
      paddingX={2}
      paddingY={1}
      data={data}
      numColumns={2}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <ProductListItem product={item} />}
    />
  );
};

export default ProductList;
