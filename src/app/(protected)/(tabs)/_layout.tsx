import { Tabs } from 'expo-router';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabsLayout() {
    return <Tabs screenOptions={{ tabBarActiveTintColor: 'black' }} >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Workout Log',
                headerShown: false,
                tabBarIcon: ({ size, color }) => <Foundation name='clipboard-notes' size={size} color={color} />,
            }}/>
        <Tabs.Screen
            name="workouts"
            options={{
                title: 'Workouts',
                headerShown: false,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='weight-lifter' size={size} color={color} />,
            }}/>
        <Tabs.Screen
            name="exercises"
            options={{
                title: 'Exercises',
                headerShown: false,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='dumbbell' size={size} color={color} />,
            }}/>
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' size={size} color={color} />,
            }}/>
        </Tabs>
}