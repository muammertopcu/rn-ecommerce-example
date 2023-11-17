import React, {ReactElement} from 'react';
import {Box, Spinner} from 'native-base';

const Loading = (): ReactElement => {
  return (
    <Box flex={1} alignItems={'center'} justifyContent={'center'}>
      <Spinner size={'large'} color={'muted.500'} />
    </Box>
  );
};

export default Loading;
