import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Product {
  id: number;
  image: any;
  title: string;
  description: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { image, title, description, price } = product;

  
  return (
    <View style={styles.productCard}>
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productDescription}>{description}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <TouchableOpacity style={styles.cartIconContainer}>
        <FontAwesome name="shopping-cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
   
   productCard: {
      marginRight: 16,
      width: 200, 
      backgroundColor: '#fff',
      borderWidth: 0.2,
      borderColor: 'pink',
      borderRadius: 10,
      padding: 10,
    },
    productImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    productTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
      color:'#4c4c4c'
    },
    productDescription: {
      fontSize: 14,
      marginTop: 5,
      color:'#8c8c8c'
    },
    productPrice: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 5,
      color:'purple'
    },
    cartIconContainer: {
      position: 'absolute',
      top: 10,
      right: 10,
      backgroundColor: 'pink',
      padding: 8,
      borderRadius: 10,
    },
  });
    

export default ProductCard;