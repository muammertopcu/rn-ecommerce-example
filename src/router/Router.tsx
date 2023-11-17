import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, ProductDetail} from '@screens';

type RootStackParamList = {
  Home: undefined;
  ProductDetail: {productId: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'ProductDetail'} component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
