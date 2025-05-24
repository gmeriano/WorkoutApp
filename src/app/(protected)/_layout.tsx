import "../../../global.css"
import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../providers/AuthProvider';

export default function RootLayout() {

  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Redirect href="/login" />
  }

  return (
  <Stack>
    <Stack.Screen name='(tabs)' options={{ title: "Workout App", headerShown: true }} />
  </Stack>
  )
    
}