import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

export default function gender() {
    const router = useRouter();
    return (
    <View style={styles.container}>
      <Text style={styles.header}> 
        I am a . . . 
      </Text>
      <View style={{ height: 50 }} />

      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/colleges')}>
        <Text style={styles.buttonText}>Woman</Text>
      </TouchableOpacity>
      <View style={{ height: 15 }} />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/colleges')}> 
        <Text style={styles.buttonText}>Man</Text>
      </TouchableOpacity>
      <View style={{ height: 15 }} />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/colleges')}>
        <Text style={styles.buttonText}>Non-binary</Text>
      </TouchableOpacity>
      <View style={{ height: 15 }} />
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/colleges')}>
        <Text style={styles.buttonText}>Other</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,
    paddingBottom: 200,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  buttonContainer: {
    width: 290,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4846C2',
  },
});
