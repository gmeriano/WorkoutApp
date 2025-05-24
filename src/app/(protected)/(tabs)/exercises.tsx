import { View, Text, FlatList, TextInput, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { exercises } from '../../../../dummyData';
import ExerciseListItem from '@/components/ExerciseListItem';
import { MuscleGroup } from '@/types';

const filterExercises = (query: string, selectedMuscleGroups: string[]) => {
  return exercises.filter(exercise => {
    console.log('query', exercise);
    console.log('selectedMuscleGroups', selectedMuscleGroups);
    const matchesSearch = exercise.name.toLowerCase().includes(query.toLowerCase());
    const matchesMuscleGroups =
      selectedMuscleGroups.length === 0 ||
      exercise.muscleGroups.some(group => selectedMuscleGroups.includes(group));
    return matchesSearch && matchesMuscleGroups;
  });
};

const muscleGroupArray: string[] = Object.values(MuscleGroup);

export default function Exercises() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedMuscleGroups, setSelectedMuscleGroups] = useState<string[]>([]);
    const [filteredExercises, setFilteredExercises] = useState(exercises);

     useEffect(() => {
    setFilteredExercises(filterExercises(searchQuery, selectedMuscleGroups));
  }, [searchQuery, selectedMuscleGroups]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        setFilteredExercises(filterExercises(query, selectedMuscleGroups));
    };
    const handleMuscleGroupToggle = (group: string) => {
        setSelectedMuscleGroups(prevState =>
        prevState.includes(group)
            ? prevState.filter(item => item !== group)
            : [...prevState, group]
        );
        setFilteredExercises(filterExercises(searchQuery, selectedMuscleGroups));
    };

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.searchInput}
            placeholder="Search exercises..."
            value={searchQuery}
            onChangeText={handleSearch}
            />
            <View style={styles.muscleGroupFilter}>
                {muscleGroupArray.map(group => (
                <Text
                    key={group}
                    style={[
                    styles.muscleGroupButton,
                    selectedMuscleGroups.includes(group) && styles.selectedMuscleGroupButton,
                    ]}
                    onPress={() => handleMuscleGroupToggle(group)}
                >
                    {group}
                </Text>
                ))}
            </View>
            <FlatList
            data={filteredExercises}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ExerciseListItem item={item} />}
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
  muscleGroupFilter: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  muscleGroupButton: {
    padding: 8,
    margin: 4,
    backgroundColor: '#ddd',
    borderRadius: 4,
  },
  selectedMuscleGroupButton: {
    backgroundColor: '#007aff',
  },
});