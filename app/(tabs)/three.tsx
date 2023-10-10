// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { Text, View } from '../../components/Themed';
// import { FontAwesome5 } from '@expo/vector-icons';

// export default function CartScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Cart</Text>
//       <FontAwesome5 name="shopping-cart" size={100} style={styles.cartIcon} />
//       <Text style={styles.cartDescription}>Your cart is currently empty.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     color:'#949494',
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   cartIcon: {
//     marginBottom: 20,
//     color: 'pink',
//   },
//   cartDescription: {
//     fontSize: 16,
//     color: '#949494',
//   },
// });

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { useCartContext } from '../../components/CartContext';

// const CartPage = () => {
//   const { cartItems } = useCartContext();

//   return (
//     <View style={styles.container}>
//       {cartItems.length === 0 ? (
//         <Text style={styles.emptyCartText}>Cart is empty</Text>
//       ) : (
//         <View>
//           {cartItems.map((item) => (
//             <View style={styles.productContainer} key={item.id}>
//               <Text style={styles.productTitle}>{item.title}</Text>
//               <Text style={styles.productDescription}>{item.description}</Text>
//               <Text style={styles.productPrice}>{item.price}</Text>
//             </View>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

//const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   emptyCartText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: 'gray',
//   },
//   productContainer: {
//     marginBottom: 20,
//     borderBottomWidth: 1,
//     borderColor: 'lightgray',
//     paddingBottom: 10,
//   },
//   productTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   productDescription: {
//     fontSize: 14,
//     color: 'gray',
//   },
//   productPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'purple',
//   },
// });

// export default CartPage;


import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native';
import { useCartContext } from '../../components/CartContext';
import CartItem from '../../components/CartItem';
import { FontAwesome5 } from '@expo/vector-icons';


const CartPage = () => {


  const { cartItems, addToCart, incrementQuantity, decrementQuantity, removeFromCart } = useCartContext();

  return (
    <View style={styles.container}>
       {cartItems.length > 0 ? (
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }: { item: CartItem }) => (
          <CartItem
            item={item}
          />
        )}
      />):(
        <View style={styles.Emptycontainer}>
        <Text style={styles.title}>Your Cart</Text>
        <FontAwesome5 name="shopping-cart" size={100} style={styles.cartIcon} />
        <Text style={styles.cartDescription}>Your cart is currently empty.</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Emptycontainer: {
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

export default CartPage;
