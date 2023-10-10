import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

const images = [
  { uri: require('../../assets/images/food1-removebg-preview.png'), title: 'Food 1' },
  { uri: require('../../assets/images/food2-removebg-preview.png'), title: 'Food 2' },
  { uri: require('../../assets/images/food3-removebg-preview.png'), title: 'Food 3' },
  { uri: require('../../assets/images/food4-removebg-preview.png'), title: 'Food 4' },
  { uri: require('../../assets/images/food5-removebg-preview.png'), title: 'Food 5' },
  { uri: require('../../assets/images/toy1-removebg-preview.png'), title: 'Toy 1' },
  { uri: require('../../assets/images/toy2-removebg-preview.png'), title: 'Toy 2' },
  { uri: require('../../assets/images/toy4-removebg-preview.png'), title: 'Toy 3' },
  { uri: require('../../assets/images/toy3-removebg-preview.png'), title: 'Toy 4' },
  { uri: require('../../assets/images/toy5-removebg-preview.png'), title: 'Toy 5' },
  ];

export default function TabTwoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {images.map((image, index) => (
          <View key={index}  style={styles.cardWrapper}>
              <View style={styles.imageWrapper}>
                <Image source={ image.uri } style={styles.image} />
              </View> 
              <Text style={styles.imageTitle}>{image.title}</Text>   
          </View>  
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, 
    backgroundColor: '#FFFBFB'
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper:{
    width: '48%',  
    marginBottom: 20,
  },
  imageWrapper: {
    backgroundColor: '#fff',
    borderWidth: 0.2,
    borderColor: 'pink',
    borderRadius: 10,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,  
  },
  imageTitle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color:'#4c4c4c'
  },
});
