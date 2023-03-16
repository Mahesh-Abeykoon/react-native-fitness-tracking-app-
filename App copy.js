import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const FitnessDashboard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Fitness App</Text>
      <TouchableOpacity style={[styles.button, styles.workoutsButton]}>
        <Text style={styles.buttonText}>Workouts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.nutritionButton]}>
        <Text style={styles.buttonText}>Nutrition</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.progressButton]}>
        <Text style={styles.buttonText}>Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.settingsButton]}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  workoutsButton: {
    backgroundColor: '#4CAF50',
    width: 200,
  },
  nutritionButton: {
    backgroundColor: '#2196F3',
    width: 200,
  },
  progressButton: {
    backgroundColor: '#FF9800',
    width: 200,
  },
  settingsButton: {
    backgroundColor: '#9E9E9E',
    width: 200,
  },
});

export default FitnessDashboard;
