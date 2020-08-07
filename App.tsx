import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calculator from './src/components/Calculator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ header: () => null }}
          name="BMI Calculator"
          component={Calculator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
