import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';
import { AntDesign, Feather } from '@expo/vector-icons';


export default function rides() {
  const router = useRouter();
  const [toggled, setToggled] = useState(true); // State for toggle button
  const [selectedOption, setSelectedOption] = useState('priority'); // State for selected ride

const rideOptions4 = [
  {key: 'p4', type: 'Priority', time: '6 minutes', price: '$20'},
  {key: 's4', type: 'Standard', time: '8 minutes', price: '$15'}
]
const rideOptions6 = [
  {key: 'p6', type: 'Priority', time: '8 minutes', price: '$25'},
  {key: 's6', type: 'Standard', time: '12 minutes', price: '$20'}
]

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.locationsContainer}>
        <Text style={styles.locationsText}>Current</Text>
        <AntDesign name="arrowright" size={24} color="white" style={styles.icon} />
        <Text style={styles.locationsText}>John Wayne</Text>
      </TouchableOpacity> 

      <View style={styles.mapContainer}>

      {/* <View style={{ height: 50 }} /> */}

      <MapView
          style={styles.map}
          initialRegion={{
            latitude: 33.6424, 
            longitude: -117.8417, 
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          <Marker
            coordinate={{ latitude: 33.6424, longitude: -117.8417 }}
            title="Current Location"
          />
           <Marker
            coordinate={{ latitude: 33.6747, longitude: -117.8692 }}
            title="John Wayne Airport"
          />
        </MapView>
      </View>

      <Text style={styles.optionHeader}> 
        4 passengers 
      </Text>

      <View style={styles.optionsContainer}>
        {rideOptions4.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.optionButton,
              selectedOption === option.key && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(option.key)}
          >
            <Text style={styles.optionText}>{option.time} ({option.price})</Text>
          </TouchableOpacity>
        ))}
      </View> 
      
      <Text style={styles.optionHeader}> 
        6 passengers 
      </Text>

      <View style={styles.optionsContainer}>
        {rideOptions6.map((option) => (
          <TouchableOpacity
            key={option.key}
            style={[
              styles.optionButton,
              selectedOption === option.key && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(option.key)}
          >
            <Text style={styles.optionText}>{option.time} ({option.price})</Text>
          </TouchableOpacity>
        ))}
      </View> 

      <View style={styles.toggleContainer}>
      <Text style={styles.text}>DriveHer</Text>
        <Text>Toggle Button:</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#4846C2" }}
          thumbColor={toggled ? "#ffffff" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setToggled(!toggled)}
          value={toggled}
        />
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/booked')}>
        <Text style={styles.buttonText}>Select SAFR</Text>
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
    paddingTop: 50,
    paddingBottom: 50,
  },
  locationsContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 50,
    marginBottom: 10
  },
  locationsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#4846C2',  
    marginTop: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
    position: 'relative',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mapContainer: {
    width: '80%',
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 20,  
  },
  map: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
    marginLeft: 10,
  },
  optionsContainer: {
    // height: 300,
    // width: 300,
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingVertical: 10,
    // alignItems: 'center',
    borderRadius: 50,
    // backgroundColor: 'black',  
    marginTop: 10,
    marginBottom: 10
  },
  optionButton: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 50,
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedOption: {
    backgroundColor: '#4846C2',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  optionHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: '10%',
    marginTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 25,
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 35,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
    marginTop: 10,
  },
});
