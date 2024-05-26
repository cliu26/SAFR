import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

export default function student() {
    const router = useRouter();
    return (
    <View style={styles.container}>
      <Text style={styles.header}> 
        Are you currently a college student?
      </Text>
      <View style={{ height: 50 }} />

      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/studentyear')}>
        <Text style={styles.buttonText}>Yes, continue</Text>
        <AntDesign name="arrowright" size={24} color="white" style={styles.icon} />
      </TouchableOpacity>
      <View style={{ height: 15 }} />
      <TouchableOpacity style={styles.buttonContainer2} onPress={() => router.push('/nonstudent')}> 
        <Text style={styles.buttonText2}>I am not a college student</Text>
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
    paddingHorizontal: 30
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
    fontSize: 38,
    fontWeight: 'bold',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  buttonContainer: {
    width: 290,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#4846C2'
  },
  buttonContainer2: {
    width: 290,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'black'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#B6B6B6',
  },
  icon: {
    marginLeft: 10,
  },
});
