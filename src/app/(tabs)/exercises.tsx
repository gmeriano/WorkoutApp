import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { AlphabetList } from 'react-native-section-alphabet-list';
import { exercises } from '../../../dummyData';
import ExerciseListItem from '@/components/ExerciseListItem';

const filterExercises = (query: string) => {
  return exercises.filter(exercise =>
    exercise.name.toLowerCase().includes(query.toLowerCase())
  );
};

export default function Exercises() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredExercises, setFilteredExercises] = useState(exercises);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setFilteredExercises(filterExercises(query));
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.searchInput}
            placeholder="Search exercises..."
            value={searchQuery}
            onChangeText={handleSearch}
            />
            <FlatList
            data={filteredExercises}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <View style={styles.exerciseItem}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text>{item.description}</Text>
                </View>
            )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 8,
    marginBottom: 16,
  },
  exerciseItem: {
    marginBottom: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  exerciseName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});