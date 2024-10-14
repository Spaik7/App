import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState('');  // State to store the email input

  const handlePasswordReset = () => {
    // Placeholder logic for resetting the password
    if (!email) {
      Alert.alert('Error', 'Please enter a valid email');
      return;
    }
    // Here, you would typically send a request to your backend or Firebase to handle the reset
    console.log(`Password reset request sent for: ${email}`);
    Alert.alert('Success', 'Password reset link sent to your email');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail: </Text>
        <TextInput
          style={styles.inputEmail}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}  // Update the email state on input change
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handlePasswordReset}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',  // Move the content towards the top
    alignItems: 'center',
    paddingTop: 100,  // Adjust padding to control the form position
    backgroundColor: '#fff',  // Ensure a consistent background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,  // Add more space between title and inputs
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',  // Adjust the container width
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    paddingRight: 10,
  },
  inputEmail: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '70%',  // Set a good width for the input field
    paddingHorizontal: 10,
  },
  submitButton: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginTop: 30,  // Add some space above the submit button
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
