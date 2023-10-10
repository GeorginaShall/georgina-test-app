import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';  // Import FontAwesome for the delete icon

import { useCartContext } from './CartContext';


interface CartItem {
  id: number;
  image: any; 
  title: string;
  description: string;
  quantity: number;
}

interface CartItemProps {
  item: CartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  
  const { removeFromCart, incrementQuantity, decrementQuantity } = useCartContext();

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  };

  const handleIncrement = () => {
    incrementQuantity(item.id);
  };

  const handleDecrement = () => {
    decrementQuantity(item.id);
  };

  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>

        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>

        <View style={styles.actions}>
          <TouchableOpacity onPress={handleDecrement}>
            <Text style={styles.actionText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{item.quantity}</Text>
          <TouchableOpacity onPress={handleIncrement}>
            <Text style={styles.actionText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={handleRemoveFromCart} style={styles.deleteIcon}>
        <FontAwesome name="trash" size={24} color="#b47cec" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    //flexDirection: 'col',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',  // Align the actions to the right
    marginTop: 10,
  },
  actionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  deleteIcon: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
});

export default CartItem;
