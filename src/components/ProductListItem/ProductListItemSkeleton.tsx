import React from 'react';
import {Skeleton, VStack} from 'native-base';

const ProductListItemSkeleton = () => {
  return (
    <VStack
      flex={1}
      margin={1}
      padding={2}
      shadow={1}
      backgroundColor={'muted.50'}
      borderRadius={5}>
      <Skeleton h="200" borderRadius={5} marginBottom={2} />
      <Skeleton.Text />
    </VStack>
  );
};

export default ProductListItemSkeleton;
