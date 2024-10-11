import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerLoginText}>
      <Text>Welcome to the [name], login or create an account</Text>
      <View style={styles.Login}>
        <Text style={styles.loginText}>Login</Text>
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
            secureTextEntry // Optionally make the password input hidden
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLoginText: {
    marginTop: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
