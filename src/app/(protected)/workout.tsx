import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const Workout = () => {
  const { template } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        {template ? `Workout Template: ${template}` : 'Empty Workout'}
      </Text>
      <Text style={styles.instructions}>
        {template
          ? 'Follow the exercises in this template.'
          : 'Add exercises to your workout.'}
      </Text>
      {/* Add workout content here */}
      <Button title="Start Workout" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
});

export default Workout;