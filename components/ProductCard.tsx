import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCartContext } from './CartContext';

interface Product {
  id: number;
  image: any;
  title: string;
  description: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product , index }) => {
  const { image, title, description, price } = product;
  //const { addToCart } = useCartContext();
  const { addToCart, cartItems } = useCartContext();

  const handleAddToCart = () => {
    addToCart(product);
    console.log('Item added to cart:', product);
    console.log('Cart items:', cartItems);
  };

  const cardStyles = [
    styles.productCard,
    index === 0 ? styles.firstProductCard : null // Apply padding only to the first product card
  ];

  return (
    <View  style={cardStyles}>
      <Image source={image} style={styles.productImage} resizeMode="cover" />
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productDescription}>{description}</Text>
      <Text style={styles.productPrice}>{price}</Text>
      <TouchableOpacity style={styles.cartIconContainer} onPress={handleAddToCart}>
        <FontAwesome name="shopping-cart" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
   
   productCard: {
      marginRight: 20,
      width: 200, 
      backgroundColor: '#fff',
      borderWidth: 0.2,
      borderColor: 'pink',
      borderRadius: 10,
      padding: 10,
    },
    firstProductCard: {
      marginLeft: 25,
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
