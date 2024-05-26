
import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import MapView, { Marker } from 'react-native-maps';

const profile = require('../assets/images/SarahSAFR.png');
const carIcon = require('../assets/images/caricon.png'); 

export default function Booked() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/traveling'); 
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
      </View>
      <Text style={styles.header}>
        Sarah is coming in 5 minutes.
      </Text>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={profile} style={styles.image} />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.licensePlate}>5ANT123</Text>
          <Text style={styles.carDescription}>White Toyota Corolla</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/traveling')}>
        <Text style={styles.buttonText}>View profile</Text>
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
    width: 300,
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
  text: {
    color: '#FFFFFF',
    fontSize: 15,
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
    height: 400,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 30,
    marginTop: 50,
  },
  map: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 18,
    marginLeft: 35,
  },
  image2: {
    width: 50,
    height: 50,
    borderRadius: 18,
    top: 200,
    left: 100,
  },
  profileInfo: {
    flex: 1,
  },
  licensePlate: {
    color: '#FFFFFF',
    fontSize: 35,
    fontWeight: 'bold',
  },
  carDescription: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});

