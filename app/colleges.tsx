import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Colleges() {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const options: string[] = [
    "Academy of Art University (CA)",
    "Alliant International University (CA)",
    "American Jewish University (CA)",
    "Azusa Pacific University (CA)",
    "California Baptist University (CA)",
    "California College of the Arts (CA)",
    "California Institute of Integral Studies (CA)",
    "California Institute of Technology (CA)",
    "California Institute of the Arts (CA)",
    "California Lutheran University (CA)",
    "California Maritime Academy (CA)",
    "California Polytechnic State University--San Luis Obispo (CA)",
    "California State Polytechnic University--Pomona (CA)",
    "California State University--Bakersfield (CA)",
    "California State University--Channel Islands (CA)",
    "California State University--Chico (CA)",
    "California State University--Dominguez Hills (CA)",
    "California State University--East Bay (CA)",
    "California State University--Fresno (CA)",
    "California State University--Fullerton (CA)",
    "California State University--Long Beach (CA)",
    "California State University--Los Angeles (CA)",
    "California State University--Monterey Bay (CA)",
    "California State University--Northridge (CA)",
    "California State University--Sacramento (CA)",
    "California State University--San Bernardino (CA)",
    "California State University--San Marcos (CA)",
    "California State University--Stanislaus (CA)",
    "Chapman University (CA)",
    "Charles R. Drew University of Medicine and Science (CA)",
    "Claremont McKenna College (CA)",
    "Dominican University of California (CA)",
    "Fresno Pacific University (CA)",
    "Golden Gate University (CA)",
    "La Sierra University (CA)",
    "Loyola Marymount University (CA)",
    "Mills College (CA)",
    "Mount St. Mary's College (CA)",
    "National Hispanic University (CA)",
    "National University (CA)",
    "Pacific Oaks College (CA)",
    "Pacifica Graduate Institute (CA)",
    "Palo Alto University (CA)",
    "Pepperdine University (CA)",
    "Pitzer College (CA)",
    "Point Loma Nazarene University (CA)",
    "Saint Mary's College of California (CA)",
    "San Diego Christian College (CA)",
    "San Diego State University (CA)",
    "San Francisco Art Institute (CA)",
    "San Francisco State University (CA)",
    "San Jose State University (CA)",
    "Santa Clara University (CA)",
    "Scripps College (CA)",
    "Soka University of America (CA)",
    "Sonoma State University (CA)",
    "Southern California Institute of Architecture (CA)",
    "Stanford University (CA)",
    "Thomas Aquinas College (CA)",
    "Touro University California (CA)",
    "University of California--Berkeley (CA)",
    "University of California--Davis (CA)",
    "University of California--Irvine (CA)",
    "University of California--Los Angeles (CA)",
    "University of California--Merced (CA)",
    "University of California--Riverside (CA)",
    "University of California--San Diego (CA)",
    "University of California--San Francisco (CA)",
    "University of California--Santa Barbara (CA)",
    "University of California--Santa Cruz (CA)",
    "University of La Verne (CA)",
    "University of Redlands (CA)",
    "University of San Diego (CA)",
    "University of San Francisco (CA)",
    "University of Southern California (CA)",
    "University of the Pacific (CA)",
    "Vanguard University of Southern California (CA)",
    "Westmont College (CA)",
    "Whittier College (CA)",
    "Woodbury University (CA)",
    "William Jessup University (CA)",
    "Woodbury University (CA)",
    "World Mission University (CA)",
    "Wyotech (CA)",
    "Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary (CA)",
    "Yo San University of Traditional Chinese Medicine (CA)",
    "Zaytuna College (CA)"
];

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
    console.log("Selected Option:", selectedOption);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search your college</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Search your college"
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
      <TouchableOpacity style={styles.buttonContainer} onPress={() => router.push('/email')}>
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
    paddingTop: 100,
    paddingBottom: 100,
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
    borderRadius: 4,
    fontSize: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white',
  },
  header: {
    color: '#FFFFFF',
    fontSize: 30,
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
});
