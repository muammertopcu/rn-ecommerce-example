import React, {ReactElement} from 'react';
import {Box, NativeBaseProvider} from 'native-base';

const Home = (): ReactElement => {
  return (
    <NativeBaseProvider>
      <Box>Home</Box>
    </NativeBaseProvider>
  );
};

export default Home;
