import React, {ReactElement} from 'react';
import Router from './router/Router';
import {NativeBaseProvider} from 'native-base';
import ReduxProvider from './redux/ReduxProvider';

function App(): ReactElement {
  return (
    <ReduxProvider>
      <NativeBaseProvider>
        <Router />
      </NativeBaseProvider>
    </ReduxProvider>
  );
}

export default App;
