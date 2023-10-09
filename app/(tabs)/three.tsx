import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <FontAwesome5 name="shopping-cart" size={100} style={styles.cartIcon} />
      <Text style={styles.cartDescription}>Your cart is currently empty.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color:'#949494',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartIcon: {
    marginBottom: 20,
    color: 'pink',
  },
  cartDescription: {
    fontSize: 16,
    color: '#949494',
  },
});
