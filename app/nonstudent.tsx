import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

const error = require('../assets/images/safrerror.png');

export default function student() {
    const router = useRouter();
    return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image source={error} style={styles.image} />
      </View>

      <Text style={styles.header}> 
        Sorry!
      </Text>

      <View style={{ height: 10 }} />

      <Text style={styles.subheader}> 
        SAFR is currently only available for students at college campuses located in California.
      </Text>
      
      <View style={{ height: 25 }} />

      <Text style={styles.text}> 
        We aim to provide the upmost safety for both riders and drivers by requiring all SAFR users to authenticate their accounts by signing in through their student emails.
        {'\n'}{'\n'}Click below to learn more about how we prioritize user safety!
      </Text>

      <View style={{ height: 15 }} />

      <TouchableOpacity style={styles.buttonContainer}> 
        <Text style={styles.buttonText}>
          Learn more!
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonContainer2} onPress={() => router.push('/student')}> 
        <Text style={styles.buttonText2}>
          Go Back
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
    paddingHorizontal: 30
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 18,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 50,
    fontWeight: 'bold',
  },
  subheader: {
    color: '#FFFFFF',
    fontSize: 20,
    // textAlign: 'left',
    fontWeight: 'bold',
  },
  text: {
    color: '#FFFFFF',
    // textAlign: 'left',
    fontSize: 20,
  },
  buttonContainer: {
    width: 290,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#4846C2',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
    marginTop: 10,
  },
  buttonText2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
