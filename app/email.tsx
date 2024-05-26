
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function email() {
    const router = useRouter();
    return (
    <View style={styles.container}>

      <Text style={styles.header}> 
        My school email is ... 
      </Text>

      <View style={{ height: 5 }} />

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <TextInput
        style={styles.input}
        placeholder='Enter email...'
      />

    </View>

    <View style={{ height: 5 }} />
    
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/welcome')}>
        <Text style={styles.buttonText}>
          Continue
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
    paddingTop: 320,
    paddingBottom: 320,
    paddingHorizontal: 30,
  },
  header: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1, 
    // marginBottom: 20, 
    paddingHorizontal: 10,
    backgroundColor: "white", 
    borderRadius: 30, 
    flexGrow: 0, 
    flexShrink: 0,
  },
  buttonContainer: {
    width: 150,
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#4846C2'
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
