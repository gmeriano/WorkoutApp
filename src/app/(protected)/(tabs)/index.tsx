import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutLog() {
  return (
    <View>
      <Text className='text-3xl font-bold text-red-500 p-2'>Workout Log</Text>
      <Link href="/login" className='text-blue-500 underline'>login</Link>
    </View>
  );
}
