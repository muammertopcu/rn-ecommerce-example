import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {HStack, Icon as RBIcon} from 'native-base';

interface RatingStarsProps {
  rating: number;
}

const RatingStars = ({rating}: RatingStarsProps) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <RBIcon
        as={Icon}
        name={'star'}
        color={i <= rating ? 'yellow.400' : 'muted.200'}
      />,
    );
  }

  return <HStack>{stars}</HStack>;
};

export default RatingStars;
