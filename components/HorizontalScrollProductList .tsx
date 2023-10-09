import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from './ProductCard';

interface Product {
    id: number;
    image: any;
    title: string;
    description: string;
    price: string;
  }
  
  interface Category {
    categoryName: string;
    products: Product[];
  }
  
  interface HorizontalScrollProductListProps {
    category: Category;
  }

const HorizontalScrollProductList: React.FC<HorizontalScrollProductListProps> = ({ category }) => {
    const { categoryName, products } = category;
  
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{categoryName}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ScrollView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    padding: 16,
    height: 380,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b47cec',
    marginBottom: 10,
  },
});

export default HorizontalScrollProductList;
