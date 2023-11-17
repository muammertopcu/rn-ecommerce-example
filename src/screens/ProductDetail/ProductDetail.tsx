import React from 'react';
import {Box, Image, ScrollView, Spinner, Text, Toast} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {useGetProductDetailQuery} from '@redux/api/products';
import {Product} from '@types';
import {ProductDetailFooter, RatingStars} from '@components';

type RootStackParamList = {
  ProductDetail: {productId: number};
};

interface Props {
  route: RouteProp<RootStackParamList, 'ProductDetail'>;
}

const ProductDetail = ({route}: Props) => {
  const {productId} = route.params;
  const {data, isLoading} = useGetProductDetailQuery(productId);

  if (isLoading) {
    return (
      <Box flex={1} alignItems={'center'} justifyContent={'center'}>
        <Spinner size={'large'} color={'muted.500'} />
      </Box>
    );
  }

  const product = data as Product;

  return (
    <Box flex={1}>
      <ScrollView backgroundColor={'muted.50'}>
        <Image
          source={{uri: product.thumbnail}}
          alt={product.title}
          w={'100%'}
          h={300}
        />

        <Box p={2}>
          <Text fontSize={'xl'} fontWeight={'bold'}>
            {product.title}
          </Text>
          <Text fontSize={'sm'}>{product.description}</Text>

          <RatingStars rating={product.rating} />
        </Box>
      </ScrollView>

      <ProductDetailFooter
        price={product.price}
        discountPercentage={product.discountPercentage}
        addToCart={() => Toast.show({title: 'Added to cart'})}
      />
    </Box>
  );
};

export default ProductDetail;
