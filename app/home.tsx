import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Switch, Image } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

export default function Home() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const options: string[] = [
    "Jack in the Box",
    "Jamba Juice",
    "Jersey Mike's Subs",
    "Jiffy Lube",
    "Jimmy John's",
    "Jimmy John's",
    "Joanne",
    "JOEY Restaurants",
    "Jollibee",
    "John F. Kennedy high School",
    "John Wayne Airport - Orange County",
    "John Wayne Airport - Parking",
    "John Wayne Airport - Terminal A",
    "John Wayne Airport - Terminal B",
    "John Wayne Airport - Terminal C",
    "John Wayne Airport Terminal Parking",
    "John Wayne Park",
    "John's Incredible Pizza Company",
    "Hyatt Regency John Wayne Airport",
  ];

  const [toggled, setToggled] = useState(false); // State for toggle button

  const handleSearch = (text: string) => {
    setSearchValue(text);
    const filtered = options.filter(option =>
      option.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const renderOptionItem = ({ item }: { item: string }) => (
    <TouchableOpacity style={styles.optionItem} onPress={() => handleSelectOption(item)}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  const handleSelectOption = (selectedOption: string) => {
    setSearchValue(selectedOption);
    const newLatitude = 33.6747; 
    const newLongitude = -117.8692;
    const newRegion = {
      latitude: newLatitude,
      longitude: newLongitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    };
    setMapRegion(newRegion);
    setNewMarker({
      latitude: newLatitude,
      longitude: newLongitude,
      title: selectedOption,
    });
  };

  const [mapRegion, setMapRegion] = useState({
    latitude: 33.6424,
    longitude: -117.8417,
    latitudeDelta: 0.015,
    longitudeDelta: 0.015,
  });

const [newMarker, setNewMarker] = useState<Marker | null>(null);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.profileImageContainer} onPress={() => router.push('/profilepage')}>
        <Image
          source={require('../assets/images/profilepic.png')} 
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.header}>Where to?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Where to?"
        placeholderTextColor="white"
        onChangeText={handleSearch}
        value={searchValue}
      />
      <FlatList 
        data={filteredOptions}
        renderItem={renderOptionItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ height: 20 }} />
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={mapRegion} // Set region dynamically
        >
          <Marker
            coordinate={{ latitude: 33.6424, longitude: -117.8417 }}
            title="Current Location"
          />
          {newMarker && (
            <Marker
              coordinate={{ latitude: newMarker.latitude, longitude: newMarker.longitude }}
              title={newMarker.title}
            />
          )}
        </MapView>
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
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/rides')}>
        <Text style={styles.buttonText}>Confirm</Text>
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
  text: {
    color: '#FFFFFF',
    fontSize: 25,
    marginTop: 5,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 35,
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  mapContainer: {
    width: '80%',
    height: 300,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 5,  
  },
  map: {
    flex: 1,
  },
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 30,
    marginTop: 10,
  },
  profileImageContainer: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
