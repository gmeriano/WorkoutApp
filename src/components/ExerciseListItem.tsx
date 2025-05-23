import { Pressable, Text, View, StyleSheet } from 'react-native';
import { Exercise } from '@/types';
import { useRouter } from 'expo-router';


export default function ExerciseListItem({ item }: { item: Exercise }) {
    const router = useRouter();
    const handlePress = () => {
        console.log(`Selected exercise: ${item.name}`);
        router.push(`${item.name}`);
    }
    return (
        <Pressable onPress={handlePress} className='bg-white shadow-md rounded-lg m-2'>
            <View style={styles.exerciseItem}>
                <Text style={styles.exerciseName}>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
exerciseItem: {
    marginBottom: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  exerciseName: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});