import { Link } from 'expo-router';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, FlatList, StyleSheet } from 'react-native';
//import { router  } from 'expo-router';

interface Order {
  id: number;
  date: string;
  paymentStatus: string;
  fulfilledStatus: string;
  total: number;
}
// function navigatetoDetails() {
//   router.replace('/OrderDetails');
// }

const Orders = () => {
  const [orderHistory, setOrderHistory] = useState([
    {
      id: 1,
      date: 'October 13,2023',
      paymentStatus: 'Paid',
      fulfilledStatus: 'Fulfilled',
      total: 100,
    },
    {
      id: 2,
      date: 'September 7,2022',
      paymentStatus: 'Voided',
      fulfilledStatus: 'Unfulfilled',
      total: 75,
    },
    {
      id: 3,
      date: 'October 3,2022',
      paymentStatus: 'Paid',
      fulfilledStatus: 'Fulfilled',
      total: 100,
    },
    {
      id: 4,
      date: 'September 17,2021',
      paymentStatus: 'Voided',
      fulfilledStatus: 'Unfulfilled',
      total: 75,
    },
  ]);

  const renderOrderItem = ({ item }: { item: Order }) => (
<>
    <View style={styles.orderItem}>
    <View style={styles.leftColumn}>
      <Text style={styles.label}>Order</Text>
      <Text style={styles.label}>Date</Text>
      <Text style={styles.label}>Payment Status</Text>
      <Text style={styles.label}>Fulfilled Status</Text>
      <Text style={styles.label}>Total</Text>
    </View>
    <View style={styles.rightColumn}>
    <View style={styles.idUnderline}><Text style={ styles.idstyle}>#{item.id}</Text></View>
      <Text style={styles.data}>{item.date}</Text>
      <Text style={styles.data}>{item.paymentStatus}</Text>
      <Text style={styles.data}>{item.fulfilledStatus}</Text>
      <Text style={styles.data}>${item.total}</Text>  
      <Link href={{ pathname: '/OrderDetails'
      //, state: { order: item }
       }}>
        <View style={styles.idUnderlineMore}>
          <Text style={ styles.idstyle}>
            More Details
          </Text>
        </View>
      </Link>
      {/* <TouchableOpacity onPress={navigatetoDetails}>
      <Text>Go to Offers</Text>
    </TouchableOpacity> */}
    </View>
  </View>
</>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order History:</Text>
      <View style={styles.horizontalLine} /> 
      <FlatList
        data={orderHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e9ddf5',
    padding: 10,
    marginTop: 15,
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  label: {
    fontWeight: '500',
    marginBottom: 25,
  },
  data: {
    marginBottom: 25,
  },
  idstyle:{
    color:'#9c9c9c',
  },
  idUnderline: {
    borderBottomColor: '#9c9c9c',
    borderBottomWidth: 1,
    marginBottom: 25,
  },  
  idUnderlineMore: {
    borderBottomColor: '#9c9c9c',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10, 
  },
  horizontalLine: {
    height: 0.5,  
    backgroundColor: '#9c9c9c',  
    marginBottom: 10,  
    opacity:0.5,
  },
});

export default Orders;
