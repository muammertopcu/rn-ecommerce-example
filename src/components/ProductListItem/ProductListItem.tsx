import React from 'react';
import {Box, Image, Text} from 'native-base';
import type {Product} from '@types';

interface Props {
  product: Product;
}

const ProductListItem = ({product}: Props) => {
  return (
    <Box
      flex={1}
      margin={1}
      padding={2}
      shadow={1}
      backgroundColor={'muted.50'}
      borderRadius={5}>
      <Image
        source={{uri: product.thumbnail}}
        alt={product.title}
        width={'100%'}
        height={200}
        borderRadius={5}
        marginBottom={2}
      />
      <Box flexDirection={'row'} alignItems={'center'}>
        <Text fontSize={'sm'} bold>
          {product.price.toFixed(2)} TL
        </Text>

        <Text fontSize={'xs'} color={'muted.400'} strikeThrough>
          {' '}
          {(product.price * (1 + product.discountPercentage / 100)).toFixed(
            0,
          )}{' '}
          TL
        </Text>

        <Text fontSize={'sm'} color={'success.600'}>
          {' '}
          %{product.discountPercentage}
        </Text>
      </Box>
      <Box>{product.title}</Box>
    </Box>
  );
};

export default ProductListItem;
