import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

const carIcon = require('../assets/images/caricon.png'); 

export default function traveling() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/ratings'); 
    }, 3000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
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
          <View style={styles.imageContainer}>
            <Image source={carIcon} style={styles.image2} />
          </View>
        </MapView>
        <View>
        <Text style={styles.locationsText}>Arrival: 3 minutes (1.3 miles) </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/ratings')}>
        <Text style={styles.buttonText}>I FEEL UNSAFE</Text>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 20
  },
  buttonContainer: {
    width: 300,
    justifyContent: 'center',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#4846C2'
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    height: 600,
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 30,
    marginBottom: 10,  
    backgroundColor: '#242424'
  },
  map: {
    flex: 1,
  },
  imageContainer: {
    marginRight: 20,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 18,
    top: 200,
    left: 100,
  },
});
