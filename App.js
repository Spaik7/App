import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';  // Login screen
import ForgotPasswordScreen from './ForgotPasswordScreen';  // Forgot password screen
import HomeScreen from './HomeScreen';  // Home screen

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login screen (no header, no back arrow) */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}  // Hide header on Login screen
        />

        {/* Forgot Password screen (with back arrow) */}
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ headerShown: true }}  // Show header with back arrow
        />

        {/* Home screen (no back arrow) */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ 
            headerLeft: null,  // Hide back arrow on Home screen
            gestureEnabled: false,  // Disable swipe back gesture (iOS)
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
