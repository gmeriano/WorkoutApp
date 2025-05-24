import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { workouts } from '../../../dummyData';
import { Workout } from '@/types';
import { router } from 'expo-router';

const handleStartEmptyWorkout = () => {
    router.push('/workout');
    console.log('Start Empty Workout');
  };

  const handleSelectTemplate = (template: { id: string; name: string }) => {
    router.push(`/workout?template=${template.id}`);
    console.log(`Start ${template.name}`);
  };

const renderTemplateItem = ({ item }: { item: Workout }) => (
    <View style={styles.templateItem}>
      <Text style={styles.templateName}>{item.name}</Text>
      <Button
        title="Start"
        onPress={() => handleSelectTemplate(item)}
        color="#4CAF50"
      />
    </View>
  );

export default function Workouts() {
      return (
    <View style={styles.container}>
      <Text style={styles.header}>Quick Start</Text>
      <Button
        title="Start Empty Workout"
        onPress={() => handleStartEmptyWorkout()}
        color="#FF5722"
      />
      <Text style={styles.header}>Workout Templates</Text>
      <FlatList
        data={workouts}
        renderItem={renderTemplateItem}
        keyExtractor={(item) => item.id}
      />
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
    marginVertical: 10,
    color: '#333',
  },
  templateItem: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  templateName: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
});