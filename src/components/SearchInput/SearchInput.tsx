import {Box, Input} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  placeholder?: string;
}

const SearchInput = ({value, onChangeText, placeholder}: Props) => {
  return (
    <Input
      w={'100%'}
      borderRadius={100}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      InputLeftElement={
        <Box pl={2}>
          <Icon name={'magnifying-glass'} size={20} />
        </Box>
      }
    />
  );
};

export default SearchInput;
