import { Text, View } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { exercises } from '../../dummyData';

export default function Exercise() {
    const { exerciseName } = useLocalSearchParams();
    const exercise = exercises.find(exercise => exercise.name === exerciseName);
    return (
        <View >
            <Stack.Screen options={{ title: exercise?.name }} />
            <Text>Exercise Details: { exerciseName }</Text>
            <Text>{ exercise?.description }</Text>
        </View>
    )
}