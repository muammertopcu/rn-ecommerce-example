import React, {ReactElement} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Box, Button, HStack, Text} from 'native-base';
import {Dimensions} from 'react-native';

interface Props {
  price: number;
  discountPercentage: number;
  addToCart: () => void;
}

const ProductDetailFooter = ({
  price,
  discountPercentage,
  addToCart,
}: Props): ReactElement => {
  const {bottom} = useSafeAreaInsets();

  return (
    <HStack
      position={'absolute'}
      bottom={0}
      pb={bottom}
      pt={5}
      px={2}
      backgroundColor={'muted.50'}
      shadow={2}
      width={Dimensions.get('window').width}>
      <Box flex={1}>
        <Text fontSize={'sm'} fontWeight={'bold'}>
          Product Price:
        </Text>

        <Box flexDirection={'row'} alignItems={'center'}>
          <Text fontSize={'xl'} fontWeight={'bold'}>
            {price.toFixed(2)} TL
          </Text>

          {discountPercentage > 0 && (
            <Text
              fontSize={'md'}
              fontWeight={'bold'}
              color={'success.600'}
              pl={1}>
              {discountPercentage}%
            </Text>
          )}
        </Box>
      </Box>

      <Button
        borderRadius={20}
        backgroundColor={'muted.700'}
        flex={1}
        onPress={addToCart}>
        Add to Cart
      </Button>
    </HStack>
  );
};

export default ProductDetailFooter;
