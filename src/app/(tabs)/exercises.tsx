import { Text, FlatList } from 'react-native';
import { exercises } from '../../../dummyData';
import ExerciseListItem from '@/components/ExerciseListItem';

export default function Exercises() {
    return (
        <FlatList 
            data={exercises}
            renderItem={({ item }) => <ExerciseListItem item={item} />}
        />
    )
}