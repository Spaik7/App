import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function HomeScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Group next to you:</Text>

      {/* Image Component */}
      <Image
        source={require('./graphic.png')} // Update the path to your image
        style={styles.image} // Add styles for the image
        resizeMode="contain" // Adjust the resize mode as needed
      />
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
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  image: {
    marginTop: -40,
    width: '100%', // Make the image responsive
    height: undefined, // Maintain aspect ratio
    aspectRatio: 1, // Adjust based on the original aspect ratio of the image
    marginVertical: 20, // Add margin for spacing
  },
});
