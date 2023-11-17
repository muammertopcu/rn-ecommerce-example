import React from 'react';
import {Box, Image, Pressable, Text} from 'native-base';
import type {Product} from '@types';
import {calculateDiscountedPrice} from '@utils';

interface Props {
  product: Product;
  onPress: () => void;
}

const ProductListItem = ({product, onPress}: Props) => {
  const calculatedDiscountedPrice = calculateDiscountedPrice(
    product.price,
    product.discountPercentage,
  );

  return (
    <Pressable
      flex={1}
      margin={1}
      padding={2}
      shadow={1}
      backgroundColor={'muted.50'}
      borderRadius={5}
      onPress={onPress}>
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
          {calculatedDiscountedPrice} TL
        </Text>

        <Text fontSize={'sm'} color={'success.600'}>
          {' '}
          %{product.discountPercentage}
        </Text>
      </Box>
      <Box>{product.title}</Box>
    </Pressable>
  );
};

export default ProductListItem;
