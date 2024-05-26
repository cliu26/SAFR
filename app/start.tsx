import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const logo = require('../assets/images/safrlogo.png');

export default function start() {
  const router = useRouter();
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
      </View>

      <Text style={styles.header}> 
        SAFR 
      </Text>

      <Text style={styles.text}> 
        Safe and Friendly Rides. 
      </Text>

      <View style={{ height: 120 }} />
      
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/student')}>
        <Text style={styles.buttonText}>
          Create Account
        </Text>
      </TouchableOpacity>

      <View style={{ height: 15 }} />

      <TouchableOpacity style={styles.buttonContainer2} onPress={() => router.push('/profile')}>
        <Text style={styles.buttonText2}>
          Log In
        </Text>
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
    fontSize: 90,
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
    backgroundColor: '#4846C2'
  },
  buttonContainer2: {
    width: 290,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
