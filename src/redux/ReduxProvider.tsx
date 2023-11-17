import React, {ReactElement} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';

interface Props {
  children: ReactElement;
}

const ReduxProvider = ({children}: Props): ReactElement => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
