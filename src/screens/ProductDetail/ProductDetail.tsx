import React from 'react';
import {Box, Image, ScrollView, Text, Toast} from 'native-base';
import {RouteProp} from '@react-navigation/native';
import {useGetProductDetailQuery} from '@redux/api/products';
import type {Product, RootStack} from '@types';
import {Loading, ProductDetailFooter, RatingStars} from '@components';
import Swiper from 'react-native-swiper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';

interface Props {
  route: RouteProp<RootStack, 'ProductDetail'>;
}

const ProductDetail = ({route}: Props) => {
  const {productId} = route.params;
  const {data, isLoading} = useGetProductDetailQuery(productId);
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <Loading />;
  }

  const product = data as Product;

  return (
    <Box flex={1}>
      <ScrollView backgroundColor={'muted.50'}>
        <Swiper
          showsButtons={true}
          style={{
            paddingTop: top,
            height: Dimensions.get('window').height / 2,
          }}>
          {product.images.map(image => (
            <Image
              key={image}
              source={{uri: image}}
              alt={product.title}
              w={'100%'}
              h={Dimensions.get('window').height / 2}
            />
          ))}
        </Swiper>

        <Box p={2}>
          <RatingStars rating={product.rating} />

          <Text fontSize={'xl'} fontWeight={'bold'}>
            {product.title}
          </Text>
          <Text fontSize={'sm'}>{product.description}</Text>
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
