import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Using Ionicons for the menu icon

export default function HomeScreen({ route }) {
  const navigation = useNavigation();  // Get navigation object for drawer control
  const { email } = route.params;  // Get the email passed from LoginScreen

  // State to store fetched data
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState(''); // buying/selling
  const [production, setProduction] = useState(null);
  const [consumption, setConsumption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch user data based on email
    const fetchUserData = async () => {
      try {
        // Make an API call to fetch the data
        const response = await fetch(`https://yourapi.com/userData?email=${email}`);
        const data = await response.json();

        // Update the state with fetched data
        setAddress(data.address);
        setStatus(data.status); // 'buying' or 'selling'
        setProduction(data.production);
        setConsumption(data.consumption);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); // Stop loading in case of error
      }
    };

    // Call the function
    fetchUserData();
  }, [email]);

  if (loading) {
    // Display a loading indicator while fetching data
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  // Function to handle button presses
  const handleGroupAction = () => {
    if (status === 'selling') {
      console.log('Navigate to Create Group screen');
      // Implement navigation to Create Group screen
    } else {
      console.log('Navigate to Join Group screen');
      // Implement navigation to Join Group screen
    }
  };

  return (
    <View style={styles.container}>
      {/* Display user-specific data */}
      <Text style={styles.text}>Address: {address}</Text>
      
      {/* Display based on status */}
      {status === 'selling' ? (
        <Text style={styles.text}>You are selling electricity</Text>
      ) : (
        <Text style={styles.text}>You are buying electricity</Text>
      )}

      {/* Conditionally display either production or consumption */}
      {status === 'selling' ? (
        <Text style={styles.text}>Production: {production} kWh</Text>
      ) : (
        <Text style={styles.text}>Consumption: {consumption} kWh</Text>
      )}

      {/* Conditionally render buttons at the bottom */}
      <View style={styles.buttonContainer}>
        {status === 'selling' ? (
          <Button title="Create a New Group" onPress={handleGroupAction} />
        ) : (
          <Button title="Join a Group" onPress={handleGroupAction} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuIcon: {
    position: 'absolute',
    top: 40,  // Adjust for top padding
    left: 20,  // Position on the left
    zIndex: 1,  // Ensure it appears above other elements
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,  // Position at the bottom
    width: '80%',  // Button width
  },
});
