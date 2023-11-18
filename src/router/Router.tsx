import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CategoryFilter, Home, ProductDetail} from '@screens';
import type {RootStack} from '@types';

const Stack = createNativeStackNavigator<RootStack>();

const Router = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'ProductDetail'} component={ProductDetail} />
        <Stack.Screen
          name={'CategoryFilter'}
          component={CategoryFilter}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
