import React, {ReactElement} from 'react';
import {HStack, Pressable, Text, VStack} from 'native-base';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStack} from '@types';
import {useGetCategoriesQuery} from '@redux/api/products';
import {Loading} from '@components';
import {RouteProp} from '@react-navigation/native';
import {formattedTextFromSlug} from '@utils';

interface Props {
  navigation: NativeStackNavigationProp<RootStack>;
  route: RouteProp<RootStack, 'CategoryFilter'>;
}

const CategoryFilter = ({navigation, route}: Props): ReactElement => {
  const {data, isLoading} = useGetCategoriesQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack>
      {data?.map(category => {
        return (
          <Pressable
            key={category.toString()}
            onPress={() => {
              navigation.navigate('Home', {category: category.toString()});
            }}>
            <HStack
              px={2}
              py={3}
              justifyContent={'space-between'}
              borderBottomColor={'muted.300'}
              borderBottomWidth={1}>
              <Text
                color={
                  route.params?.category === category.toString()
                    ? 'blue.500'
                    : 'black'
                }>
                {formattedTextFromSlug(category.toString())}
              </Text>
            </HStack>
          </Pressable>
        );
      })}
    </VStack>
  );
};

export default CategoryFilter;
