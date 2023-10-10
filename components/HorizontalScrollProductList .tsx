import React from 'react';
import {Image, View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ProductCard from './ProductCard';
import { useCartContext } from './CartContext';

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
    const { addToCart } = useCartContext(); 
    
  
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>{categoryName}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </ScrollView>
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    //padding: 16,
    height: 380,
    marginBottom:10,
  },
  sectionTitle: {
    paddingTop:15,
    paddingLeft:25,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#b47cec',
    marginBottom: 10,
  },
});

export default HorizontalScrollProductList;
