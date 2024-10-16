import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';

const QuizScreen = ({ route, navigation }) => {
  // Destructure the email and password from the route params
  const { email, password } = route.params;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [address, setAddress] = useState('');
  const [electricityChoice, setElectricityChoice] = useState('');
  const [consumption, setConsumption] = useState('');
  const [production, setProduction] = useState('');

  // Send data to the backend
  const handleSubmit = () => {
    // Prepare the data to send
    const formData = {
      name,
      surname,
      email, // Include the email and password in the form data
      password,
      address,
      electricityPreference: electricityChoice,
      annualConsumption: electricityChoice === 'buy' ? consumption : '',
      annualProduction: electricityChoice === 'sell' ? production : '',
    };

    console.log(formData);
    navigation.navigate('HomeScreen'); // Navigate to the HomeScreen
    /*
    // Send data to the server using Axios
    axios.post('http://localhost:5000/api/submit', formData)
      .then(response => {
        console.log('Data submitted successfully:', response.data);
        navigation.navigate('HomeScreen'); // Navigate to the HomeScreen
      })
      .catch(error => {
        console.error('Error submitting data:', error);
      });*/
  };

  // List of questions and associated answers or buttons
  const questions = [
    {
      question: "What is your name?",
      component: (
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      ),
    },
    {
      question: "What is your surname?",
      component: (
        <TextInput
          style={styles.input}
          placeholder="Enter your surname"
          value={surname}
          onChangeText={setSurname}
        />
      ),
    },
    {
      question: "What is your address?",
      component: (
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={address}
          onChangeText={setAddress}
        />
      ),
    },
    {
      question: "Are you going to sell or buy electricity?",
      component: (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.choiceButton, electricityChoice === 'sell' && styles.selectedButton]}
            onPress={() => setElectricityChoice('sell')}
          >
            <Text>Sell</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.choiceButton, electricityChoice === 'buy' && styles.selectedButton]}
            onPress={() => setElectricityChoice('buy')}
          >
            <Text>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.choiceButton, electricityChoice === 'notSure' && styles.selectedButton]}
            onPress={() => setElectricityChoice('notSure')}
          >
            <Text>Not Sure Yet</Text>
          </TouchableOpacity>
        </View>
      ),
    },
    // Conditional questions based on electricity choice
    {
      question: electricityChoice === 'sell' ? "What is your annual production?" : "What is your annual consumption?",
      component: (
        <TextInput
          style={styles.input}
          placeholder={
            electricityChoice === 'sell'
              ? "Enter your annual production"
              : "Enter your annual consumption"
          }
          value={electricityChoice === 'sell' ? production : consumption}
          onChangeText={electricityChoice === 'sell' ? setProduction : setConsumption}
          keyboardType="numeric"
        />
      ),
    },
  ];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Display current question */}
      <Text style={styles.questionText}>{questions[currentQuestion].question}</Text>

      {/* Render the input or selection component for the current question */}
      {questions[currentQuestion].component}

      <View style={styles.navigationButtons}>
        {currentQuestion > 0 && (
          <TouchableOpacity onPress={handleBack} style={styles.navButton}>
            <Text style={styles.navButtonText}>Back</Text>
          </TouchableOpacity>
        )}
        {currentQuestion < questions.length - 1 ? (
          <TouchableOpacity onPress={handleNext} style={styles.navButton}>
            <Text style={styles.navButtonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSubmit} style={styles.navButton}>
            <Text style={styles.navButtonText}>Submit</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  choiceButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  selectedButton: {
    backgroundColor: '#ddd',
  },
  navigationButtons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  navButton: {
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default QuizScreen;
