import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';

const logo = require('../assets/images/safrlogo.png');


export default function student() {
    const router = useRouter();
    return (
    <View style={styles.container}>
      <Text style={styles.header}> 
        Welcome to SAFR!
      </Text>

      <View style={{ height: 5 }} />

      <Text style={styles.text}> 
        Thank you for signing up!
      </Text>

      <View style={{ height: 30 }} />
      <Image source={logo} style={styles.image} />
      <View style={{ height: 30 }} />

      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/home')}>
        <Text style={styles.buttonText}>Get Started</Text>
        <AntDesign name="arrowright" size={24} color="white" style={styles.icon} />
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
