import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Create Account

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleEnterPress = async () => {
    // Hardcoded credentials for testing
    const hardcodedEmail = 'A@a';
    const hardcodedPassword = '1234';

    if (isLogin) {
      // Handle login
      if (email === hardcodedEmail && password === hardcodedPassword) {
        //try {
          // Simulate fetching user data (name in this case) from the server
          //const response = await fetch(`https://yourapi.com/userData?email=${email}&password=${password}`);
          //const data = await response.json();

          // Assuming data includes the 'name' field
          // const { name } = data; in production
          //for testing: 
          const name = 'Dany'; // This is correct for testing

          console.log('Login successful');
          // Pass the name to the HomeScreen
          navigation.navigate('HomeScreen', { name });
        /*} catch (error) {
          console.log('Error fetching user data:', error);
          Alert.alert('Error', 'Failed to retrieve user data');
        }*/
      } else {
        console.log('Invalid email or password');
        Alert.alert('Error', 'Invalid email or password');
      }
    } else {
      // Navigate to the SignupScreen for account creation
      console.log('Navigating to Signup Screen');
      navigation.navigate('QuizScreen', { email, password });
    }
  };

  return (
    <View style={styles.containerLoginText}>
      <Text>Welcome to Coopernico, please {isLogin ? 'login' : 'create an account'}</Text>

      <View style={styles.Login}>
        <Text style={styles.loginText}>{isLogin ? 'Login' : 'Create Account'}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail: </Text>
          <TextInput
            style={styles.inputEmail}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail} // Update email state
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password: </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry // Make the password input hidden
            value={password}
            onChangeText={setPassword} // Update password state
          />
        </View>

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
    paddingTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Login: {
    padding: 10,
    marginTop: 30,
    width: '80%', // Ensure the login container spans the full width
    alignItems: 'center', // Center content horizontally
  },
  loginText: {
    fontSize: 24, // Adjust font size as needed
    fontWeight: 'bold', // Make the text bold if desired
    marginBottom: 10, // Add some space below the login text
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start', // Align items to the start of the row
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 15, // Add space between input fields
  },
  label: {
    fontSize: 16,
    paddingRight: 10,
  },
  inputEmail: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '69%', // Set a narrower width for the email input
    paddingHorizontal: 10,
    marginLeft: 23, // Add margin on the left of the email input
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1, // Allow the password input to take up remaining space
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
