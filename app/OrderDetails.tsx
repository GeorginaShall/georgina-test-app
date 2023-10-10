import React, { useState } from 'react';
import { View, Text } from 'react-native';

const OrderDetails = () => {
  const [order] = useState([
    {
      id: 1,
      date: 'October 13,2023',
      time:'7:33 pm',
      canceldate:'October 14,2022',
      canceltime:'3:53 pm',
      cancelcause:'Customer changed/cancelled order',
      paymentStatus: 'Paid',
      fulfilledStatus: 'Fulfilled',
      total: 100,
    },
  ]);

  const orderData = order[0]; // Access the order data

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.label}>Order #{orderData.id}</Text>
      <Text style={styles.data}>Placed on {orderData.date} at {orderData.time}</Text>
      <Text style={styles.data}>Cancelled on {orderData.canceldate} at {orderData.canceltime}</Text>
      <View style={styles.horizontalLine} /> 
      <Text style={styles.data}>Payment Status: {orderData.paymentStatus}</Text>
      <Text style={styles.data}>Fulfilled Status: {orderData.fulfilledStatus}</Text>
      <Text style={styles.data}>Total: ${orderData.total}</Text>
    </View>
  );
};

const styles = {
  label: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  data: {
    marginBottom: 10,
  },
  horizontalLine: {
    height: 0.5,  
    backgroundColor: '#9c9c9c',  
    marginBottom: 10,  
    opacity:0.5,
  },
};

export default OrderDetails;
