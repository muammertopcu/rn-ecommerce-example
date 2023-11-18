import React from 'react';
import {Box, Pressable} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

interface Props {
  onPress: () => void;
}

const FilterButton = ({onPress}: Props) => {
  return (
    <Pressable
      borderColor={'muted.500'}
      borderWidth={1}
      borderRadius={50}
      mt={2}
      onPress={onPress}>
      <Box px={2} flexDirection={'row'}>
        Category
        <Icon name={'chevron-down'} size={20} />
      </Box>
    </Pressable>
  );
};

export default FilterButton;
