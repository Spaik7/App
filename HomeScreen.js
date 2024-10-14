import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);  // State to toggle between Login and Create Account

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleEnterPress = () => {
    // Logic to handle login or account creation
    if (isLogin) {
      // Handle login
      console.log('Logging in...');
    } else {
      // Handle account creation
      console.log('Creating an account...');
    }
  };

  return (
    <View style={styles.containerLoginText}>
      <Text>Welcome to the [name], {isLogin ? 'login' : 'create an account'}</Text>

      <View style={styles.Login}>
        <Text style={styles.loginText}>{isLogin ? 'Login' : 'Create Account'}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail: </Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="E-mail"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password: </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry  // Optionally make the password input hidden
          />
        </View>

        {/* Conditionally render confirm password for create account */}
        {!isLogin && (
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm Password: </Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
            />
          </View>
        )}

        {/* Enter Button */}
        <TouchableOpacity style={styles.enterButton} onPress={handleEnterPress}>
          <Text style={styles.enterButtonText}>{isLogin ? 'Login' : 'Create Account'}</Text>
        </TouchableOpacity>
      </View>

      {/* Toggle between login and create account */}
      <View>
        <TouchableOpacity onPress={toggleForm}>
          <Text style={styles.toggleLink}>
            {isLogin ? "Don't have an account? Create one" : "Already have an account? Login"}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password Link */}
      {isLogin && (
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
    containerLoginText: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start', // Align items towards the top
      paddingTop: 80,  // Add padding to move the form down from the top
    },
    Login: {
      padding: 10,
      marginTop: 30,  // Adjust this margin to fine-tune the height of the form
      width: '80%',
      alignItems: 'center',
    },
    loginText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
      paddingHorizontal: 20,
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      paddingRight: 10,
    },
    inputEmail: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '69%',
      paddingHorizontal: 10,
      marginLeft: 23,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      flex: 1,
      paddingHorizontal: 10,
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline',
      marginTop: 10,
    },
    toggleLink: {
      color: 'green',
      textDecorationLine: 'underline',
      marginTop: 15,
    },
    enterButton: {
      backgroundColor: '#1E90FF',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
      width: '100%',
      alignItems: 'center',
    },
    enterButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  