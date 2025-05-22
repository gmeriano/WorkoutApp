import { StyleSheet, Text, View } from 'react-native';

export default function WorkoutLog() {
  return (
    <View style={styles.container}>
      <Text>Workout Log</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
