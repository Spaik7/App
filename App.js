import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';  // Login screen
import ForgotPasswordScreen from './ForgotPasswordScreen';  // Forgot password screen
import HomeScreen from './HomeScreen';  // Home screen
import AccountScreen from './AccountScreen';  // Account screen
import QuizScreen from './QuizScreen';  // Account screen
import Icon from 'react-native-vector-icons/Ionicons';  // Importing Ionicons

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen} 
          options={{ headerShown: true }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerLeft: null,
            headerTitle: '',
            gestureEnabled: true,
            headerRight: () => (
              <Icon.Button
                name="person"  // Person icon for the account
                size={25}
                backgroundColor="transparent"
                color="#333"
                onPress={() => navigation.navigate('AccountScreen')}
              />
            ),
          })}
        />

        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{ headerShown: true, title: 'My Account' }}
        />
       <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          options={{ title: 'Welcome to Coopernico', headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
