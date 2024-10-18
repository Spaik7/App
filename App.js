import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import HomeScreen from './HomeScreen';
import AccountScreen from './AccountScreen';
import QuizScreen from './QuizScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(null); // Store the current navigation

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    toggleModal();
    Alert.alert('Logged out', 'You have been logged out successfully.');
    if (currentNavigation) {
      currentNavigation.navigate('Login'); // Use the stored navigation
    }
  };

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
          options={({ navigation }) => {
            setCurrentNavigation(navigation); // Store the navigation prop

            return {
              headerTitle: 'Welcome back to Coopernico',
              gestureEnabled: true,
              headerTitleStyle: { fontSize: 16 },
              headerLeft: () => (
                <TouchableOpacity onPress={toggleModal}>
                  <Icon
                    name="menu"
                    size={25}
                    color="#333"
                    style={{ marginLeft: 15 }}
                  />
                </TouchableOpacity>
              ),
              headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
                  <Icon
                    name="person"
                    size={25}
                    color="#333"
                    style={{ marginRight: 15 }}
                  />
                </TouchableOpacity>
              ),
            };
          }}
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

      <Modal isVisible={isModalVisible} onBackdropPress={toggleModal}>
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Menu</Text>
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.sidebarItem}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sidebarItem: {
    fontSize: 18,
    paddingVertical: 10,
    color: 'red',
  },
});
