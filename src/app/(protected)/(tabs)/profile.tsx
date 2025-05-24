import { Text, View, StyleSheet, Pressable } from 'react-native';
import { supabase } from '@/lib/supabase';

export default function Profile() {
  return (
    <View style={styles.container}>
        <Text onPress={() => supabase.auth.signOut()} style={styles.signOutText}>Sign Out</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                     // Fill the screen
    justifyContent: 'center',   // Center vertically
    alignItems: 'center',       // Center horizontally
    backgroundColor: '#fff',    // Optional: white background
  },
  signOutText: {
    fontSize: 20,
    color: 'blue',              // Optional: color to indicate it's clickable
    textDecorationLine: 'underline',
  },
});