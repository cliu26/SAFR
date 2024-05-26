import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const ProfilePage: React.FC = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/profilepic.png')} style={styles.profileImage} />
        <Text style={styles.name}>Jane Doe</Text>
      </View>
      <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="settings-outline" size={30} color="#FFFFFF" />
        <Text style={styles.itemText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="time-outline" size={30} color="#FFFFFF" />
        <Text style={styles.itemText}>Past Rides</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="help-circle-outline" size={30} color="#FFFFFF" />
        <Text style={styles.itemText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <Ionicons name="car-outline" size={30} color="#FFFFFF" />
        <Text style={styles.itemText}>Become a Driver</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer} onPress={() => router.push('/start')}>
        <Ionicons name="log-out-outline" size={30} color="#FFFFFF" />
        <Text style={styles.itemText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#000000',
    marginTop: 60,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 20,
  },
  name: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});

export default ProfilePage;
