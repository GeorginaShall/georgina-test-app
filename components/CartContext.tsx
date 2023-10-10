import React, { useState, useContext, createContext, ReactNode } from 'react';
import { Alert } from 'react-native';

const CartContext = createContext<{
  cartItems: any[];
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
} | undefined>(undefined);

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode; // Specify the type for children
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<any[]>([]);


  const addToCart = (product: any) => {
    // Check if the product already exists in the cart based on the product id
    const alreadyInCart = cartItems.some(item => item.id === product.id);

    if (alreadyInCart) {
      Alert.alert('Product is already in the cart.');
    } else {
      Alert.alert('Product added to cart.');
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId: number) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId: number) => {
    setCartItems(prevCartItems =>
      prevCartItems.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const value = { cartItems, addToCart, removeFromCart, incrementQuantity, decrementQuantity };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
