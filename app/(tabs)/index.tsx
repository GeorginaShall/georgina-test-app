import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import HorizontalScrollProductList from '../../components/HorizontalScrollProductList ';

export default function TabOneScreen() {
  const categories = [
    {
      categoryName: 'Food',
      products: [
        {
          id: 1,
          image: require('../../assets/images/food1-removebg-preview.png'),
          title: 'Food Product 1', 
          description: 'Description for food Product 1',
          price: '$99.99',
        },
        {
          id: 2,
          image: require('../../assets/images/food4-removebg-preview.png'),
          title: 'Food Product 2',
          description: 'Description for food Product 2',
          price: '$149.99',
        },
        {
          id: 3,
          image: require('../../assets/images/food2-removebg-preview.png'),
          title: 'Food Product 1',
          description: 'Description for food Product 1',
          price: '$99.99',
        },
      ],
    },
    {
      categoryName: 'Food on sale',
      products: [
        {
          id: 4,
          image: require('../../assets/images/food2-removebg-preview.png'),
          title: 'Food Product 1',
          description: 'Description for food Product 1',
          price: '$99.99',
        },
        {
          id: 5,
          image: require('../../assets/images/food5-removebg-preview.png'),
          title: 'Food Product 2',
          description: 'Description for food Product 2',
          price: '$149.99',
        },
      ],
    },
    {
      categoryName: 'Others',
      products: [
        {
          id: 6,
          image: require('../../assets/images/food6-removebg-preview.png'),
          title: 'Other Food Product 1',
          description: 'Description for food Product 1',
          price: '$29.99',
        },
        {
          id: 7,
          image: require('../../assets/images/food3-removebg-preview.png'),
          title: 'Other Food Product 2',
          description: 'Description for food Product 2',
          price: '$39.99',
        },
      ],
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {categories.map((category, index) => (
        <HorizontalScrollProductList key={index} category={category} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //padding: 20, 
    backgroundColor: '#FFFBFB'
  },
  // additionalContent: {
  //   padding: 20,
  //   backgroundColor: '#f0f0f0',
  //   borderRadius: 10,
  //   marginTop: 20,
  // },
});
