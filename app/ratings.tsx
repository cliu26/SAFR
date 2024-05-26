import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const profile = require('../assets/images/SarahSAFR.png');

const StarRating: React.FC<{ rating: number; onRate: (rating: number) => void }> = ({ rating, onRate }) => {
  const totalStars = 5;

  const handleRate = (selectedRating: number) => {
    onRate(selectedRating);
  };

  return (
    <View style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <TouchableOpacity key={index} onPress={() => handleRate(starValue)}>
            <Text style={[styles.star, starValue <= rating && styles.highlightedStar]}>{'\u2605'}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function RateDriver() {
  const [rating, setRating] = useState<number>(0);
  const router = useRouter();

  const handleConfirmRating = () => {
    router.push('./home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.imageContainer}>
          <Image source={profile} style={styles.image} />
        </View>
      </View>
      <Text style={styles.ratingText}>Rate the driver:</Text>
      <StarRating rating={rating} onRate={setRating} />
      <TouchableOpacity style={styles.buttonContainer} onPress={handleConfirmRating}>
        <Text style={styles.buttonText}>Confirm Rating</Text>
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
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ratingText: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  star: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  highlightedStar: {
    color: '#FFD700', // Color for highlighted star
  },
});
