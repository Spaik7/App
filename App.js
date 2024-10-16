import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import Icon from 'react-native-vector-icons/Ionicons';  // Importing Ionicons
import LoginScreen from './LoginScreen';  // Login screen
import ForgotPasswordScreen from './ForgotPasswordScreen';  // Forgot password screen
import HomeScreen from './HomeScreen';  // Home screen
import AccountScreen from './AccountScreen';  // Account screen
import QuizScreen from './QuizScreen';  // Quiz screen

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
          options={({ route, navigation }) => ({
            headerTitle: `Welcome back to Coopernico, ${route.params?.name || ''}`,
            gestureEnabled: true,
            headerTitleStyle: { fontSize: 16 },  // Set a smaller font size for the title
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                  name="menu"  // Burger menu icon
                  size={25}
                  color="#333"
                  style={{ marginLeft: 15 }}  // Add margin to the left
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
                <Icon
                  name="person"  // Person icon for the account
                  size={25}
                  color="#333"
                  style={{ marginRight: 15 }}  // Add margin to the right
                />
              </TouchableOpacity>
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
