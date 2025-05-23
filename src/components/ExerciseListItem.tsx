import { Pressable, Text, View } from 'react-native';
import { Exercise } from '@/types';
import { useRouter } from 'expo-router';


export default function ExerciseListItem({ item }: { item: Exercise }) {
    const router = useRouter();
    const handlePress = () => {
        router.push(`${item.name}`);
    }
    return (
        <Pressable onPress={handlePress} className='bg-white shadow-md rounded-lg m-2'>
            <View>
                <Text className='text-3xl font-bold text-red-500 p-2'>{item.name}</Text>
                <Text className='text-lg text-gray-500 p-2'>{item.description}</Text>
            </View>
        </Pressable>
    )
}